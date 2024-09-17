import create from "zustand";

interface StoreState {
  isMobile: boolean;
  isSidebarOpen: boolean; // 사이드바 열림/닫힘 상태
  checkMobile: () => void;
  toggleSidebar: () => void; // 사이드바 열림/닫힘을 토글하는 함수

  // 환경 변수 상태
  dbHost: string;
  dbUser: string;
  dbPass: string;
  dbName: string;
  namespace: string;
  bucketName: string;
  oracleNamespace: string;
  oracleBucketName: string;
  oracleUserId: string;
  oracleFingerprint: string;
  oraclePrivateKeyFilePath: string;
  oracleTenancyId: string;
  oracleRegion: string;
  oracleBucketUrl: string;
}

// Zustand 스토어 생성
const useStore = create<StoreState>((set) => ({
  // 초기 상태
  isMobile: false,
  isSidebarOpen: false,

  // 환경 변수 상태 초기화
  dbHost: process.env.DB_HOST || "",
  dbUser: process.env.DB_USER || "",
  dbPass: process.env.DB_PASS || "",
  dbName: process.env.DB_NAME || "",
  namespace: process.env.NAMESPACE || "",
  bucketName: process.env.BUCKET_NAME || "",
  oracleNamespace: process.env.ORACLE_CLOUD_NAMESPACE || "",
  oracleBucketName: process.env.ORACLE_CLOUD_BUCKET_NAME || "",
  oracleUserId: process.env.ORACLE_CLOUD_USER_ID || "",
  oracleFingerprint: process.env.ORACLE_CLOUD_FINGERPRINT || "",
  oraclePrivateKeyFilePath: process.env.ORACLE_CLOUD_PRIVATE_KEY_FILE_PATH || "",
  oracleTenancyId: process.env.ORACLE_CLOUD_TENANCY_ID || "",
  oracleRegion: process.env.ORACLE_CLOUD_REGION || "",
  oracleBucketUrl: process.env.ORACLE_CLOUD_BUCKET_URL || "",

  // 모바일 여부 확인
  checkMobile: () => {
    const isMobileScreen = window.innerWidth <= 767;
    set({ isMobile: isMobileScreen });
  },

  // 사이드바 열림/닫힘을 토글하는 함수
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
