// src/app/os/objectStorageClient.ts

import { ObjectStorageClient } from 'oci-objectstorage';
import { ConfigFileAuthenticationDetailsProvider } from 'oci-common';
import path from 'path';

// 환경 변수에서 설정 읽기
const configFilePathEnv = process.env.OCI_CONFIG_FILE || path.join(process.cwd(), '.vercel', 'config');
const profile = process.env.OCI_PROFILE || 'DEFAULT';
const BUCKET_NAME = process.env.OCI_BUCKET_NAME ?? '';
const NAMESPACE = process.env.OCI_NAMESPACE ?? '';

let objectStorageClient: ObjectStorageClient | undefined;

export function initializeObjectStorageClient(): void {
  try {
    const provider = new ConfigFileAuthenticationDetailsProvider(configFilePathEnv, profile);
    console.log('ConfigFileAuthenticationDetailsProvider 생성 완료');
    
    objectStorageClient = new ObjectStorageClient({ authenticationDetailsProvider: provider });
    console.log('ObjectStorageClient 생성 완료');
  } catch (error) {
    console.error('ObjectStorageClient 초기화 실패:', error);
    throw new Error('ObjectStorageClient 초기화 실패');
  }
}

export function getObjectStorageClient(): ObjectStorageClient {
  if (!objectStorageClient) {
    throw new Error('ObjectStorageClient가 초기화되지 않았습니다.');
  }
  return objectStorageClient;
}
