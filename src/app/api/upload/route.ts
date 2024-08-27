import { ConfigFileAuthenticationDetailsProvider } from 'oci-common';
import { ObjectStorageClient } from 'oci-objectstorage';
import Busboy from 'busboy';
import { NextResponse } from 'next/server';
import path from 'path';
import { Readable } from 'stream';

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
      console.log(`업로드한 파일: ${filename}`);

      const uploadPromise = new Promise<void>((resolve, reject) => {
        const chunks: Buffer[] = [];

        file.on('data', (chunk) => chunks.push(chunk));
        file.on('end', () => {
          const buffer = Buffer.concat(chunks);
          const stream = Readable.from(buffer);

          objectStorageClient.putObject({
            namespaceName: NAMESPACE,
            bucketName: BUCKET_NAME,
            objectName: filename,
            putObjectBody: stream,
          })
          .then(() => {
            console.log(`파일 ${filename} 업로드 완료`);
            resolve();
          })
          .catch((error) => {
            console.error(`업로드 실패 ${filename}:`, error);
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
      console.error('업로드 에러:', error);
      reject(NextResponse.json({ error: '업로드 실패' }, { status: 500 }));
    });
  });
}
