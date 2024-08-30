import { ObjectStorageClient } from 'oci-objectstorage';
import path from 'path';
import crypto from 'crypto';
import { generateImageUrl } from '../../_services/imageService';
import { Readable } from 'stream';
import formidable, { File, Files, Fields } from 'formidable';
import { IncomingMessage } from 'http';
import fs from 'fs';


const BUCKET_NAME = process.env.OCI_BUCKET_NAME ?? '';
const NAMESPACE = process.env.OCI_NAMESPACE ?? '';

if (!BUCKET_NAME || !NAMESPACE) {
  throw new Error('환경변수 NAMESPACE 또는 BUCKET_NAME이 정의되지 않았습니다.');
}

export async function uploadImage(fileBuffer: Buffer, fileName: string, objectStorageClient: ObjectStorageClient): Promise<{ uniqueId: string, imageUrl: string }> {
  const ext = path.extname(fileName).toLowerCase() || '.png';
  const uniqueId = crypto.randomBytes(16).toString('hex');
  const objectName = `image/${uniqueId}${ext}`;

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
      const imageUrl = generateImageUrl({
        bucketName: BUCKET_NAME,
        objectName: objectName,
      });
      return { uniqueId, imageUrl };
    })
    .catch((error) => {
      console.error(`업로드 실패 ${objectName}:`, error);
      throw error;
    });
  } else {
    throw new Error('환경변수 NAMESPACE 또는 BUCKET_NAME이 정의되지 않았습니다.');
  }
}