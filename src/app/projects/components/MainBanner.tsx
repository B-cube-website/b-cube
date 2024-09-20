import React from "react";
import Image from "next/image";
import file_image from "@/../public/file-bulb.png";

const MainBanner = () => {
  return (
    <div>
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto h-[700px] hidden lg:block">
        <div
          className="absolute"
          style={{
            width: "calc(100% - 45.5% - 7%)",
            height: "calc(100% - 45.5% - 7%)",
            left: "50%",
            right: "7%",
            top: "7em",
          }}
        >
          <Image
            src={file_image}
            alt="file_image"
            layout="responsive"
            className="h-auto blur-sm max-w-[600px]"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-start items-start absolute left-[98px] top-[117px] gap-6">
          <h1
            className="text-xl font-bold text-left text-white leading-loose lg:text-4xl xl:text-5xl"
            style={{ maxWidth: "38rem" }}
          >
            B-CUBE의 다양한 활동들을 지금 확인해 보세요
          </h1>
        </div>
      </div>
      <div className="mx-6 my-24 block lg:hidden">
        <h1 className="text-2xl max-w-[12.5em] sm:text-5xl font-bold text-left text-white leading-loose sm:max-w-[13em]">
          B-CUBE의 다양한 활동들을 지금 확인해 보세요
        </h1>
        <div className="flex justify-end">
          <Image
            src={file_image}
            alt="file_image"
            layout="responsive"
            className="h-auto blur-sm max-w-[500px]"
            width={733}
            height={733}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
