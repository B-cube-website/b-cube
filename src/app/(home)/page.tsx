import Main from "./components/Main";
import { headers } from "next/headers";

// 서버 측에서 User-Agent를 기반으로 모바일 여부를 판단하는 함수
async function checkIfMobile() {
  const headersList = headers(); // 서버의 요청 헤더 가져오기
  const userAgent = headersList.get("user-agent") || "";

  const isMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Silk/.test(userAgent);

  return isMobile;
}

export default async function HomePage() {
  // 서버 측에서 모바일 여부 확인
  const isMobile = await checkIfMobile();

  // 클라이언트 컴포넌트에 초기 모바일 상태 전달
  return <Main initialMobileState={isMobile} />;
}

