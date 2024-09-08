import dotenv from 'dotenv';

dotenv.config();

interface GeneratePdfUrlOptions {
  bucketName: string;
  objectName: string;
}

const generatePdfUrl = (options: GeneratePdfUrlOptions): string => {

  const region: string = process.env.OCI_REGION ?? 'ap-chuncheon-1';
  const namespace: string = process.env.OCI_NAMESPACE ?? 'axsqxeygavsg';

  const bucketName: string = options.bucketName;
  const objectName: string = options.objectName;
  
  const url = `https://${namespace}.compat.objectstorage.${region}.oraclecloud.com/n/${namespace}/b/${bucketName}/o/${objectName}`;
  return url;
};

export { generatePdfUrl };