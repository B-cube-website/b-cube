"use client";

import React, { useEffect } from "react";
import WebPage from "../webPage";
import MobilePage from "../mobilePage";
import useStore from "@/stores/useStore";

interface MainProps {
  initialMobileState: boolean;
}

export default function Main({ initialMobileState }: MainProps) {
  const isMobile = useStore((state) => state.isMobile);
  const setMobileState = useStore((state) => state.setMobileState);
  const checkMobile = useStore((state) => state.checkMobile);

  useEffect(() => {
    // 서버에서 받은 모바일 여부 상태를 Zustand로 설정
    setMobileState(initialMobileState);

    // 페이지 로드 시에도 모바일 여부 확인
    checkMobile();

    // 화면 크기 변경 시 모바일 여부를 다시 체크
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [initialMobileState, setMobileState, checkMobile]);

  return <>{isMobile ? <MobilePage /> : <WebPage />} </>;
}
