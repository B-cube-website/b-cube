import React from "react";
import Image from "next/image";
import file_image from "@/../public/file-bulb.svg";

const MainBanner = () => {
  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto h-[700px]">
      <div
        className="absolute"
        style={{
          width: "calc(100% - 45.5% - 7%)",
          height: "calc(100% - 45.5% - 7%)",
          left: "45.5%",
          right: "7%",
          top: "40.11px",
          bottom: "32px",
        }}
      >
        <Image
          src={file_image}
          alt="file_image"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-start items-start absolute left-[98px] top-[117px] gap-6">
        <h1
          className="text-5xl font-bold text-left text-white leading-normal"
          style={{ maxWidth: "38rem" }}
        >
          B-CUBE의 다양한 활동들을 지금 확인해 보세요
        </h1>
      </div>
    </div>
  );
};

export default MainBanner;
