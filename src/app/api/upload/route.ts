import { ConfigFileAuthenticationDetailsProvider } from 'oci-common';
import { ObjectStorageClient } from 'oci-objectstorage';
import Busboy from 'busboy';
import { NextResponse } from 'next/server';
import path from 'path';
import { Readable } from 'stream';
import crypto from 'crypto';

// 환경 변수
const configFilePathEnv = process.env.OCI_CONFIG_FILE || path.join(process.cwd(), '.vercel', 'config');
const profile = process.env.OCI_PROFILE || 'DEFAULT';


let provider;
try {
  provider = new ConfigFileAuthenticationDetailsProvider(configFilePathEnv, profile);
  console.log('ConfigFileAuthenticationDetailsProvider 생성 완료');
} catch (error) {
  console.error('ConfigFileAuthenticationDetailsProvider 생성 실패:', error);
}

// 오브젝트 스토리지
const objectStorageClient = new ObjectStorageClient({ authenticationDetailsProvider: provider });

const BUCKET_NAME = process.env.OCI_BUCKET_NAME;
const NAMESPACE = process.env.OCI_NAMESPACE;

if (!BUCKET_NAME) {
  throw new Error('버킷 네임의 환경변수 설정 필요');
}

if (!NAMESPACE) {
  throw new Error('네임변수 환경변수 설정 필요');
}

export async function POST(req: Request): Promise<Response> {
  const contentType = req.headers.get('Content-Type') || '';

  if (!contentType.startsWith('multipart/form-data')) {
    return NextResponse.json({ error: 'Content-Type은 반드시 multipart/form-data 형태여야 합니다.' }, { status: 400 });
  }

  const busboy = Busboy({ headers: { 'content-type': contentType } });
  const fileUploadPromises: Promise<void>[] = [];
  const bodyStream = req.body as ReadableStream<Uint8Array>;

  return new Promise<Response>((resolve, reject) => {
    const reader = bodyStream.getReader();

    reader.read().then(function processText({ done, value }) {
      if (done) {
        busboy.end();
        return;
      }

      busboy.write(Buffer.from(value));
      return reader.read().then(processText);
    });

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      // filename이 객체로 전달되는 경우 문자열로 변환
      if (typeof filename === 'object') {
        filename = filename.filename || 'unknown';
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
      const objectName = `image/${uniqueId}${ext}`; // 파일 확장자를 포함한 경로 설정

      const uploadPromise = new Promise<void>((resolve, reject) => {
        const chunks: Buffer[] = [];

        file.on('data', (chunk) => chunks.push(chunk));
        file.on('end', () => {
          const buffer = Buffer.concat(chunks);
          const stream = Readable.from(buffer);

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
        });

        file.on('error', reject);
      });

      fileUploadPromises.push(uploadPromise);
    });

    busboy.on('finish', async () => {
      try {
        await Promise.all(fileUploadPromises);
        resolve(NextResponse.json({ message: '업로드 완료' }));
      } catch (error) {
        reject(NextResponse.json({ error: '업로드 실패' }, { status: 500 }));
      }
    });

    busboy.on('error', (error) => {
      console.error('Busboy 에러:', error);
      reject(NextResponse.json({ error: '업로드 실패' }, { status: 500 }));
    });
  });
}
