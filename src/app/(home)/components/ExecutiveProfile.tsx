import React from "react";

// Executive 타입 정의
interface Executive {
  id: number;
  memberName: string;
  role: string;
  studentId: string;
  basicInfo: string;
  imageUrl: string;
}

// Props 타입 정의
interface ExecutivesProfileProps {
  profile: Executive[];
  isLoading: boolean;
  loadingText?: string;
}

export default function ExecutivesProfile({
  profile,
  isLoading,
  loadingText = "로딩 중...",
}: ExecutivesProfileProps) {
  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (profile.length === 0) {
    return <p>회장단 정보가 없습니다.</p>;
  }

  // id가 5 또는 9인 항목만 필터링
  const filteredProfile = profile.filter(
    (executive) => executive.id === 5 || executive.id === 9
  );

  if (filteredProfile.length === 0) {
    return <p>해당 조건에 맞는 회장단 정보가 없습니다.</p>;
  }

  return (
    <div className="mt-[32px] md:mt-[48px] flex justify-center items-center flex-col md:flex-row flex-wrap w-full gap-[64px] md:gap-[128px]">
      {filteredProfile.map((executive) => (
        <div
          key={executive.id}
          className="flex flex-col justify-start items-center relative gap-6"
        >
          <img
            src={executive.imageUrl}
            alt={`${executive.memberName}'s profile`}
            className="w-[150px] h-[150px] md:w-[222px] md:h-[222px] bg-cover bg-center rounded-full flex-none order-0"
          />
          <p className="text-center flex flex-col items-center gap-2 text-[#F6F6F7] font-semibold">
            <span className="text-[18px] md:text-[20px] leading-[24px]">
              {executive.role}
            </span>
            <span className="text-[16px] md:text-[18px] leading-[20px] md:leading-[30px]">
              {executive.basicInfo}
              <br />
              {executive.memberName}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
