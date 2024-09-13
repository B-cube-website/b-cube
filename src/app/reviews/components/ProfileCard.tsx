import React from "react";
import Image from "next/image";
import Haksamo from "../../../../public/haksamo.svg";
import Email_logo3 from "../../../../public/email_logo3.svg";

// ProfileCard의 새로운 인터페이스: API에서 받은 데이터를 기반으로 업데이트
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
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[167px] gap-[4.766081809997559px] px-[11.438596725463867px] py-4 rounded-[10px] bg-[#f6f6f7]/[0.04]">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6">
        {/* 프로필 이미지 */}
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[4.766081809997559px]">
          <img
            className="flex-grow-0 flex-shrink-0"
            src={imageUrl}
            alt={`${name} profile`}
          />
        </div>

        {/* 이름과 학번 */}
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
          <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[111px] text-sm font-semibold text-center text-[#f6f6f7]">
              {name}
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[3.8128654956817627px]">
              <Image src={Haksamo} alt="haksamo" />

              <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-[#c5c5c6]">
                {studentId} {/* 학번 */}
              </p>
            </div>
          </div>

          {/* 메시지 */}
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[4.766081809997559px] px-3.5 py-2 rounded-[42.89px] bg-[#ebeef6]/20">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-white">
              {message} {/* 메시지 */}
            </p>
          </div>
        </div>
      </div>
      <Image src={Email_logo3} alt="email_logo3" />
    </div>
  );
};

export default ProfileCard;
