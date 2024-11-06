import React from "react";
import Image from "next/image";
import file_image from "@/../public/file-bulb.svg";

const MainBanner = () => {
  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-[700px] ">
      <div className="absolute inset-0 flex justify-end items-center mt-[100px]">
        {/* 상단 그라데이션 */}
        <div className="absolute top-[-100px] left-0 w-full h-[174px] z-30" 
              style={{ background: "linear-gradient(to bottom, #06142D, transparent)" }}
        />
        <Image
          src={file_image}
          alt="file_image"
          className="object-contain object-right-bottom"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          style={{ filter: "blur(8px)" }}
        />
      </div>
      <div className="flex flex-col justify-start items-start absolute mt-[117px]">
        <h1
          className="text-5xl font-bold text-left text-white leading-normal"
        >
          B-CUBE의 다양한 활동들을 <br />지금 확인해 보세요
        </h1>
      </div>
    </div>
  );
};

export default MainBanner;
