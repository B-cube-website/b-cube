export default function ExecutivesProfile({ profile, isLoading, loadingText }) {
  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (profile.length === 0) {
    return <p>회장단 정보가 없습니다.</p>;
  }

  return (
    <div className="mt-[48px] flex justify-center items-start flex-wrap w-full gap-[128px]">
      {profile.map((executive) => (
        <div
          key={executive.id}
          className="flex flex-col justify-start items-center relative gap-6"
        >
          <img
            src={executive.image_path}
            alt={`${executive.member_name}'s profile`}
            className="w-[222px] h-[222px] bg-cover bg-center rounded-full flex-none order-0"
          />
          <p className="text-center flex flex-col items-center gap-2 text-[#F6F6F7] font-semibold">
            <span className="text-[20px] leading-[24px]">{executive.role}</span>
            <span className="text-[18px] leading-[30px]">
              {executive.basic_info}
              <br />
              {executive.member_name}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
