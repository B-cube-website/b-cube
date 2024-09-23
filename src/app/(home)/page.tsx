"use client";

import React, { useEffect } from "react";
import WebPage from "./webPage";
import MobilePage from "./mobilePage";
import useStore from "@/stores/useStore";

export default function Main() {
  const isMobile = useStore((state) => state.isMobile);
  const checkMobile = useStore((state) => state.checkMobile);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [checkMobile]);

  return <>{isMobile ? <MobilePage /> : <WebPage />} </>;
}
