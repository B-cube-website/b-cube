"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Haksamo from "../../../../public/haksamo.svg";
import Email_logo3 from "../../../../public/email_logo3.svg";

// ProfileCardProps 인터페이스 정의
interface ProfileCardProps {
  name: string;
  studentId: string;
  message: string;
  imageUrl: string;
  email: string;
  className: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  studentId,
  message,
  imageUrl,
  email,
  className,
}) => {
  const [isLongText, setIsLongText] = useState(false);

  useEffect(() => {
    // 공백을 제외한 텍스트 길이 계산
    const messageLengthWithoutSpaces = message.replace(/\s/g, "").length;

    // 텍스트 길이가 공백 제외 10자를 넘는지 체크
    if (messageLengthWithoutSpaces > 10) {
      setIsLongText(true);
    } else {
      setIsLongText(false);
    }
  }, [message]);

  // 이메일 복사 함수
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("이메일이 복사되었습니다."); // 복사 완료 알림
      })
      .catch((err) => {
        console.error("이메일 복사 중 오류 발생:", err);
      });
  };

  return (
    <div
      className="flex-grow-0 flex-shrink-0 w-[380px] h-[480px] relative rounded-[10px] bg-[#f6f6f7]/[0.04]"
      style={{
        border: "1px solid #518CFF",
      }}
    >
      {/* 프로필 이미지 */}
      <div className="w-[180px] h-[180px] absolute left-1/2 top-8 transform -translate-x-1/2 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`${name}의 프로필 이미지`}
        />
      </div>

      {/* 이름 */}
      <p className="absolute left-1/2 top-[259px] transform -translate-x-1/2 text-2xl font-semibold text-center text-[#f6f6f7]">
        {name}
      </p>

      {/* 학번 */}
      <div className="flex items-center absolute left-1/2 transform -translate-x-1/2 top-[296px] gap-2">
        {/* 학번 아이콘 */}
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
        className={`absolute left-1/2 top-[336px] transform -translate-x-1/2 px-6 py-4 rounded-full bg-[#ebeef6]/20 ${
          isLongText ? "max-w-[280px] w-full" : "w-fit"
        }`}
      >
        <p className="text-sm font-medium text-center text-[#f6f6f7]">
          {message}
        </p>
      </div>

      {/* 이메일 아이콘 클릭 시 복사 */}
      <Image
        src={Email_logo3}
        alt="이메일 아이콘"
        width={31}
        height={30}
        className="w-[30px] h-[30px] absolute left-1/2 transform -translate-x-1/2 top-[425px] cursor-pointer"
        onClick={copyEmailToClipboard} // 클릭 시 이메일 복사
      />
    </div>
  );
};

export default ProfileCard;
