import React from "react";
import Image from "next/image";
import Haksamo from "../../../../public/haksamo.svg";
import Email_logo3 from "../../../../public/email_logo3.svg";

// ProfileCard 인터페이스 정의
interface ProfileCardProps {
  name: string;
  studentId: string;
  message: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  studentId,
  message,
  imageUrl,
}) => {
  return (
    <div
      className="flex-grow-0 flex-shrink-0 w-[379px] h-[480px] relative rounded-[10px] bg-[#f6f6f7]/[0.04]"
      style={{
        border: "1px solid #518CFF",
      }}
    >
      {/* 프로필 이미지 */}
      <div className="w-[180px] h-[180px] absolute left-[99.66px] top-8 overflow-hidden rounded-[90px]">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`${name} profile`}
        />
      </div>
      {/* 이름 */}
      <p className="absolute left-1/2 top-[259px] transform -translate-x-1/2 text-2xl font-semibold text-center text-[#f6f6f7]">
        {name}
      </p>

      {/* 학번 */}
      <div className="flex justify-start items-center absolute left-1/2 transform -translate-x-1/2 top-[296px] gap-2">
        {/* 학번 아이콘 */}
        <Image
          src={Haksamo}
          alt="학번 아이콘"
          width={25}
          height={24}
          className="w-6 h-6 relative"
        />
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#c5c5c6]">
          {studentId}
        </p>
      </div>

      {/* 메시지 */}
      <div className="flex justify-center items-center absolute left-1/2 top-[336px] transform -translate-x-1/2 px-6 py-4 rounded-full bg-[#ebeef6]/20">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#f6f6f7]">
          {message}
        </p>
      </div>

      {/* 이메일 아이콘 */}
      <Image
        src={Email_logo3}
        alt="이메일 아이콘"
        width={31}
        height={30}
        className="w-[30px] h-[30px] absolute left-[174px] top-[418px]"
      />
    </div>
  );
};

export default ProfileCard;
