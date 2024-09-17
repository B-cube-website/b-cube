import { ObjectStorageClient } from "oci-objectstorage";
import { SimpleAuthenticationDetailsProvider } from "oci-common";
import fs from "fs";
import { Region } from "oci-common"; // Region import

// 환경 변수에서 OCI 설정 값 가져오기
const OCI_USER_ID = process.env.OCI_USER_ID ?? "";
const OCI_FINGERPRINT = process.env.OCI_FINGERPRINT ?? "";
const OCI_TENANCY_ID = process.env.OCI_TENANCY_ID ?? "";
const OCI_REGION = process.env.OCI_REGION ?? ""; // 문자열로 지역을 가져옴
const OCI_PRIVATE_KEY_FILE_PATH = process.env.OCI_PRIVATE_KEY_FILE_PATH ?? "";

// 프라이빗 키 읽기
const privateKey = fs.readFileSync(OCI_PRIVATE_KEY_FILE_PATH, 'utf8');

// Region.fromRegionId()를 사용해 문자열을 Region 객체로 변환
const region = Region.fromRegionId(OCI_REGION);

// 인증 제공자 설정
const authenticationProvider = new SimpleAuthenticationDetailsProvider(
  OCI_TENANCY_ID,
  OCI_USER_ID,
  OCI_FINGERPRINT,
  privateKey,
  null,  // Optional passphrase
  region
);

let objectStorageClient: ObjectStorageClient | undefined;

export function initializeObjectStorageClient(): void {
  try {
    // ObjectStorageClient 생성
    objectStorageClient = new ObjectStorageClient({
      authenticationDetailsProvider: authenticationProvider,
    });

    console.log("ObjectStorageClient 생성 완료");
  } catch (error) {
    console.error("ObjectStorageClient 초기화 실패:", error);
    throw new Error("ObjectStorageClient 초기화 실패");
  }
}

export function getObjectStorageClient(): ObjectStorageClient {
  if (!objectStorageClient) {
    throw new Error("ObjectStorageClient가 초기화되지 않았습니다.");
  }
  return objectStorageClient;
}

