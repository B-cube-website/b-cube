import { ConfigFileAuthenticationDetailsProvider } from 'oci-common';
import { ObjectStorageClient } from 'oci-objectstorage';
import Busboy from 'busboy';
import { NextResponse } from 'next/server';
import pool from '../../_libs/mysql';
import { generateImageUrl } from '../../_services/imageService';
import path from 'path';
import { Readable } from 'stream';
import crypto from 'crypto';

// 환경 변수
const configFilePathEnv = process.env.OCI_CONFIG_FILE || path.join(process.cwd(), '.vercel', 'config');
const profile = process.env.OCI_PROFILE || 'DEFAULT';
const BUCKET_NAME = process.env.OCI_BUCKET_NAME ?? '';
const NAMESPACE = process.env.OCI_NAMESPACE ?? '';

if (!BUCKET_NAME || !NAMESPACE) {
  throw new Error('OCI 환경변수 설정 필요');
}

let provider;
try {
  provider = new ConfigFileAuthenticationDetailsProvider(configFilePathEnv, profile);
  console.log('ConfigFileAuthenticationDetailsProvider 생성 완료');
} catch (error) {
  console.error('ConfigFileAuthenticationDetailsProvider 생성 실패:', error);
}

// 오브젝트 스토리지
let objectStorageClient: ObjectStorageClient;
if (provider) {
  objectStorageClient = new ObjectStorageClient({ authenticationDetailsProvider: provider });
} else {
  throw new Error('Provider가 정의되지 않았습니다.');
}

export async function POST(req: Request): Promise<Response> {
  const contentType = req.headers.get('Content-Type') || '';

  if (!contentType.startsWith('multipart/form-data')) {
    return NextResponse.json({ error: 'Content-Type은 반드시 multipart/form-data 형태여야 합니다.' }, { status: 400 });
  }

  const busboy = Busboy({ headers: { 'content-type': contentType } });
  const fileUploadPromises: Promise<void>[] = [];
  // ** 변경된 부분 **
  const bodyFields: { [key: string] : string} = {};
  const bodyStream = req.body as ReadableStream<Uint8Array>;
  let uniqueId: string;
  let filename: string;

  return new Promise<Response>((resolve, reject) => {
    const reader = bodyStream.getReader();

    function processText(result: ReadableStreamReadResult<Uint8Array>): Promise<void> {
      const { done, value } = result;

      if (done) {
        busboy.end();
        return Promise.resolve(); // 명시적으로 Promise.resolve()를 반환
      }

      busboy.write(Buffer.from(value || new Uint8Array()));
      return reader.read().then(processText);
    }

    reader.read().then(processText);

    // **변경된 부분: Busboy 'field' 이벤트로 필드 처리**
    busboy.on('field', (fieldname: string, value: string) => {
      bodyFields[fieldname] = value; // 필드 저장
    });

    busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, filename: string | undefined, encoding: string, mimetype: string) => {
      // filename이 객체로 전달되는 경우 문자열로 변환
      if (typeof filename === 'object' && filename !== null) {
        // filename이 객체일 때 타입 단언을 사용하여 filename 프로퍼티 접근
        const fileObj = filename as { filename: string };
        filename = fileObj.filename || 'unknown';
      }
      // filename이 문자열인지 확인
      if (typeof filename !== 'string') {
        console.error('파일 이름이 문자열이 아닙니다:', filename);
        return reject(NextResponse.json({ error: '잘못된 파일 이름' }, { status: 400 }));
      }

      console.log(`업로드한 파일: ${filename}`);

      // 파일 이름과 확장자를 추출
      const ext = path.extname(filename).toLowerCase() || '.png'; // 기본값을 .png로 설정

      // 파일 이름을 고유한 ID로 변환하여 경로를 설정
      const uniqueId = crypto.randomBytes(16).toString('hex');
      const objectName = `image/${uniqueId}${ext}`;

      const uploadPromise = new Promise<void>((resolve, reject) => {
        const chunks: Buffer[] = [];

        file.on('data', (chunk) => chunks.push(chunk));
        file.on('end', () => {
          const buffer = Buffer.concat(chunks);
          const stream = Readable.from(buffer);

          if (NAMESPACE && BUCKET_NAME) {
            objectStorageClient.putObject({
              namespaceName: NAMESPACE,
              bucketName: BUCKET_NAME,
              objectName: objectName,
              putObjectBody: stream,
            })
            .then(() => {
              console.log(`파일 ${objectName} 업로드 완료`);
              resolve();
            })
            .catch((error) => {
              console.error(`업로드 실패 ${objectName}:`, error);
              reject(error);
            });
          } else {
            reject(new Error('환경변수 NAMESPACE 또는 BUCKET_NAME이 정의되지 않았습니다.'));
          }
        });

        file.on('error', reject);
      });

      fileUploadPromises.push(uploadPromise);
    });

    busboy.on('finish', async () => {
      try {
        await Promise.all(fileUploadPromises);

        // 필요한 데이터 추출
        // **변경된 부분: Busboy 'field'에서 추출한 필드를 사용하여 업데이트**
        const tableName = bodyFields['table_name'];
        const itemId = bodyFields['item_id'];

        // 변경된 부분
        if(!tableName || !itemId){
          return reject(NextResponse.json({error: "테이블 이름과 항목 ID가 필요합니다."}, {status: 400}));
        }

        const imageUrl = generateImageUrl({
          bucketName: BUCKET_NAME,
          objectName: `image/${uniqueId}${path.extname(filename)}`
        });

        let query = '';
        switch (tableName) {
          case 'activity_photo':
            query = 'UPDATE activity_photo SET image_path = ? WHERE id = ?';
            break;
          case 'executives':
            query = 'UPDATE executives SET image_path = ? WHERE id = ?';
            break;
          case 'main_activity':
            query = 'UPDATE main_activity SET image_path = ? WHERE id = ?';
            break;
          case 'ob_interview':
            query = 'UPDATE ob_interview SET image_path = ? WHERE id = ?';
            break;
          case 'specific_activities':
            query = 'UPDATE specific_activities SET image_path = ? WHERE id = ?';
            break;
          default:
            return reject(NextResponse.json({ error: '유효하지 않은 테이블 이름' }, { status: 400 }));
        }

        const connection = await pool.getConnection();
        await connection.query(query, [imageUrl, itemId]);
        connection.release();

        resolve(NextResponse.json({ message: '업로드 및 데이터베이스 업데이트 완료' }));
      } catch (error) {
        reject(NextResponse.json({ error: '업로드 또는 데이터베이스 업데이트 실패' }, { status: 500 }));
      }
    });

    busboy.on('error', (error) => {
      console.error('Busboy 에러:', error);
      reject(NextResponse.json({ error: '업로드 실패' }, { status: 500 }));
    });
  });
}