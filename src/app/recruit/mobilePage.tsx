import React from "react";
import MobileMain from "@/mobileComponents/mobileMain";

export default function Review() {
  return (
    <main>
      <MobileMain
      svgImage="/megaphone.svg"
      mainText="지금은 모집기간이 아닙니다"
      subText="2024년 1학기 모집이 완료되었습니다!<br />다음 기수는 2024년 9월에 예정되어 있습니다." ></MobileMain>
    </main>
  );
}
