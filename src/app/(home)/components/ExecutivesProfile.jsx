export default function ExecutivesProfile({ profile, isLoading, loadingText }) {
    if (isLoading) {
      return <p>{loadingText}</p>;
    }
  
    if (profile.length === 0) {
      return <p>회장단 정보가 없습니다.</p>;
    }
  
    // id가 5 또는 9인 항목만 필터링
    const filteredProfile = profile.filter(
      (executive) => executive.id === 5 || executive.id === 10
    );
  
    if (filteredProfile.length === 0) {
      return <p>해당 조건에 맞는 회장단 정보가 없습니다.</p>;
    }
  
    return (
      <div className="mt-[48px] flex justify-center items-start flex-wrap w-full gap-[128px]">
        {filteredProfile.map((executive) => (
          <div
            key={executive.id}
            className="flex flex-col justify-start items-center relative gap-6"
          >
            <img
              src={executive.imageUrl}
              alt={`${executive.memberName}'s profile`}
              className="w-[222px] h-[222px] bg-cover bg-center rounded-full flex-none order-0"
            />
            <p className="text-center flex flex-col items-center gap-2 text-[#F6F6F7] font-semibold">
              <span className="text-[20px] leading-[24px]">{executive.role}</span>
              <span className="text-[18px] leading-[30px]">
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
  