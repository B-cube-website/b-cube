import React from "react";
import Image, { ImageProps } from "next/image";
import file_image from "@/../public/file-bulb.svg";
interface MobileMainProps {
  svgImage: ImageProps["src"];
  altText: string;
  mainText: string;
  subText?: string;
}

const MobileMain: React.FC<MobileMainProps> = ({
  svgImage,
  altText,
  mainText,
  subText,
}) => {
  return (
    <div className="flex w-full relative h-60">
      <div className="absolute inset-0 flex justify-end items-center z-10">
        <div className="absolute backdrop-blur-sm"
        style={{
          width: '100%',
          height: '100%',
        }}/>
        <Image
          src={svgImage}
          alt={altText}
          className="object-contain w-52"
        />
      </div>

  
      <div className="flex flex-col justify-start items-start absolute z-20 gap-3 p-7">
        <p className="font-bold text-2xl text-white ">
          {mainText.split("<br />").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        {subText && (
          <p className="z-20 w-full text-[14px] font-medium text-left text-[#f6f6f7]">
            {subText.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
        
        {/* 그라데이션 적용 위치 */}
        <div className="w-full h-[47px] mt-1 z-30" 
               style={{ background: "linear-gradient(to bottom, #06142D, transparent)" }}
          />

      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[47.23px] bg-gradient-to-b from-[#06142d]/0 to-[#06142d]" />
    </div>
  );
};

export default MobileMain;
