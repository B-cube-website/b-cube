import dotenv from 'dotenv';

dotenv.config();

interface GenerateImageUrlOptions {
  bucketName: string;
  objectName: string;
}

const generateImageUrl = (options: GenerateImageUrlOptions): string => {

  const region: string = process.env.OCI_REGION ?? 'ap-chuncheon-1';
  const namespace: string = process.env.OCI_NAMESPACE ?? 'axsqxeygavsg';

  const bucketName: string = options.bucketName;
  const objectName: string = options.objectName;
  
  const url = `https://${namespace}.compat.objectstorage.${region}.oraclecloud.com/n/${options.bucketName}/b/${options.objectName}/o/`;
  return url;
};

export { generateImageUrl };

