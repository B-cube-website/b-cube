import { ObjectStorageClient } from 'oci-objectstorage';
import path from 'path';
import crypto from 'crypto';
import { generatePdfUrl } from '../../_services/pdfService';  // 올바른 경로
import { Readable } from 'stream';

const BUCKET_NAME = process.env.OCI_BUCKET_NAME ?? '';
const NAMESPACE = process.env.OCI_NAMESPACE ?? '';

if (!BUCKET_NAME || !NAMESPACE) {
  throw new Error('환경변수 NAMESPACE 또는 BUCKET_NAME이 정의되지 않았습니다.');
}

export async function uploadPdf(fileBuffer: Buffer, fileName: string, objectStorageClient: ObjectStorageClient): Promise<{ uniqueId: string, pdfUrl: string }> {
  const ext = path.extname(fileName).toLowerCase() || '.pdf';
  const uniqueId = crypto.randomBytes(16).toString('hex');
  const objectName = `pdf/${uniqueId}${ext}`;

  const fileStream = Readable.from(fileBuffer);

  if (NAMESPACE && BUCKET_NAME) {
    return objectStorageClient.putObject({
      namespaceName: NAMESPACE,
      bucketName: BUCKET_NAME,
      objectName: objectName,
      putObjectBody: fileStream,
    })
    .then(() => {
      console.log(`파일 ${objectName} 업로드 완료`);
      const pdfUrl = generatePdfUrl({
        bucketName: BUCKET_NAME,
        objectName: objectName,
      });
      return { uniqueId, pdfUrl };
    })
    .catch((error) => {
      console.error(`업로드 실패 ${objectName}:`, error);
      throw error;
    });
  } else {
    throw new Error('환경변수 NAMESPACE 또는 BUCKET_NAME이 정의되지 않았습니다.');
  }
}
