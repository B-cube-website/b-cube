"use client";

import { useEffect } from "react";
import useStore from "@/stores/useStore";
import MobileNavigation from "@/mobileComponents/mobileNavigation";
import MobileFooter from "@/mobileComponents/mobileFooter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface ClientWrapperProps {
  children: React.ReactNode;
  initialMobileState: boolean;
}

export default function ClientWrapper({
  children,
  initialMobileState,
}: ClientWrapperProps) {
  const isMobile = useStore((state) => state.isMobile);
  const setMobileState = useStore((state) => state.setMobileState);
  const checkMobile = useStore((state) => state.checkMobile);

  useEffect(() => {
    // 서버에서 받은 모바일 여부 상태를 초기 상태로 설정
    setMobileState(initialMobileState);

    // 페이지 로드 시에도 모바일 여부 확인 (클라이언트에서 다시 확인)
    checkMobile();

    // 화면 크기 변경 시 모바일 여부를 다시 체크
    const handleResize = () => checkMobile();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialMobileState, setMobileState, checkMobile]);

  return (
    <>
      {/* 모바일 여부에 따라 네비게이션 및 푸터를 조건부로 렌더링 */}
      {isMobile ? <MobileNavigation /> : <Navigation />}
      {children}
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}
