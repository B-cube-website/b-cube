import React from "react";
import Image, { ImageProps } from "next/image";

interface MobileMainProps {
  svgImage: ImageProps["src"];
  mainText: string;
  subText?: string;
}

const MobileMain: React.FC<MobileMainProps> = ({
  svgImage,
  mainText,
  subText,
}) => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-[311px] relative overflow-hidden">
      <svg
        width="100%"
        height={48}
        viewBox="0 0 390 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="self-stretch flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
      ></svg>
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-60 relative bg-[#06142d]">
        <Image
          src={svgImage}
          alt="megaphone"
          layout="responsive"
          width={100}
          height={100}
        />

        {subText && (
          <p className="w-full h-8 absolute left-7 top-[21.71px] text-[9px] font-bold text-left text-[#f6f6f7]">
            {subText.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}

        <p className="w-full h-[30px] absolute left-[27px] top-[-9.29px] text-2xl font-bold text-left text-white">
          {mainText}
        </p>
      </div>

      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[47.23px] bg-gradient-to-b from-[#06142d]/0 to-[#06142d]" />
    </div>
  );
};

export default MobileMain;
