import React from "react";
import Image from "next/image";
import file_image from "@/../public/file-bulb.png";

const MainBanner = () => {
  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto h-[500px] sm:h-[700px]">
      <div className="w-[733.58px] h-[733.58px] absolute right-[0px] top-[82.11px]">
        <Image src={file_image} alt="file_image" className="blur-sm" />
      </div>
      <div className="flex flex-col justify-start items-start absolute left-[20px] sm:left-[98px] top-[50px] sm:top-[117px] gap-4 sm:gap-6">
        <h1 className="text-2xl sm:text-5xl font-bold text-left text-white leading-normal max-w-xs sm:max-w-xl">
          B-CUBE의 다양한 활동들을 지금 확인해 보세요
        </h1>
      </div>
    </div>
  );
};

export default MainBanner;
