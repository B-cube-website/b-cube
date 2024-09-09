"use client";

import { useEffect } from "react";
import useStore from "@/stores/useStore"; // zustand 스토어 경로
import MobileNavigation from "@/mobileComponents/mobileNavigation"; 
import MobileFooter from "@/mobileComponents/mobileFooter"; 
import Navigation from "@/components/navigation"; 
import Footer from "@/components/footer"; 

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useStore((state) => state.isMobile);
  const checkMobile = useStore((state) => state.checkMobile);

  useEffect(() => {
    checkMobile();
    const handleResize = () => checkMobile();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkMobile]);

  return (
    <>
      {/* 모바일 여부에 따라 네비게이션 및 푸터를 조건부로 렌더링 */}
      {isMobile ? <MobileNavigation /> : <Navigation />}
      {children}
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}
