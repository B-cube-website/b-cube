"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Haksamo from "../../../../public/haksamo.svg";
import Email_logo3 from "../../../../public/email_logo3.svg";
import useStore from "@/stores/useStore";

interface ProfileCardProps {
  name: string;
  studentId: string;
  message: string;
  imageUrl: string;
  email: string;
  style?: React.CSSProperties;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  studentId,
  message,
  imageUrl,
  email,
  style,
}) => {
  const [isLongText, setIsLongText] = useState(false);
  const { isMobile } = useStore(); // 모바일 여부 확인

  useEffect(() => {
    const messageLengthWithoutSpaces = message.replace(/\s/g, "").length;
    setIsLongText(messageLengthWithoutSpaces > 10);
  }, [message]);

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("이메일이 복사되었습니다.");
      })
      .catch((err) => {
        console.error("이메일 복사 중 오류 발생:", err);
      });
  };

  return (
    <div
      className="relative flex-grow-0 flex-shrink-0 rounded-[10px] bg-[#f6f6f7]/[0.04] flex flex-col items-center justify-between p-6"
      style={{
        border: "1px solid #518CFF",
        width: isMobile ? "87vw" : "380px", // 모바일에서는 87vw, 데스크탑에서는 고정 380px
        height: isMobile ? "calc(87vw * 1.23)" : "480px", // 모바일에서는 높이도 1.23배, 데스크탑은 480px
        ...style, // 추가 스타일 적용
      }}
    >
      <div className="w-[180px] h-[180px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`${name}의 프로필 이미지`}
        />
      </div>

      <p className="text-2xl font-semibold text-center text-[#f6f6f7] mt-4">
        {name}
      </p>

      <div className="flex items-center gap-2 mt-2">
        <Image
          src={Haksamo}
          alt="학번 아이콘"
          width={25}
          height={24}
          className="w-6 h-6"
        />
        <p className="text-sm font-medium text-left text-[#c5c5c6]">
          {studentId}
        </p>
      </div>

      {/* 메시지 */}
      <div
        className={`px-6 py-4 rounded-full bg-[#ebeef6]/20 mt-4 ${
          isLongText ? "max-w-[280px] w-full" : "w-fit"
        }`}
      >
        <p className="text-sm font-medium text-center text-[#f6f6f7]">
          {message}
        </p>
      </div>

      {/* 이메일 아이콘 */}
      <div className="mt-4">
        <Image
          src={Email_logo3}
          alt="이메일 아이콘"
          width={31}
          height={30}
          className="cursor-pointer"
          onClick={copyEmailToClipboard} // 클릭 시 이메일 복사
        />
      </div>
    </div>
  );
};

export default ProfileCard;
