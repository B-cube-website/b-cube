import React from "react";
import Image, { ImageProps } from "next/image";

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
    <div className="flex flex-col justify-start items-start w-full h-[311px] relative overflow-hidden">
      <div
        className="relative"
        style={{
          width: "calc(100% - 45.5% - 7%)",
          height: "calc(100% - 45.5% - 7%)",
          left: "45.5%",
          right: "7%",
          top: "80px",
          position: "absolute",
          zIndex: 10,
        }}
      >
        <Image
          src={svgImage}
          alt={altText}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>

      <div
        className="self-stretch flex-grow-0 flex-shrink-0 h-60 relative bg-[#06142d]"
        style={{ top: "55px" }}
      >
        {subText && (
          <p className="w-full h-8 absolute left-7 top-[21.71px] text-[11px] font-bold text-left text-[#f6f6f7]">
            {subText.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}
        <p className="absolute left-[27px] top-[-9.29px] z-10 text-2xl font-bold text-left text-white">
          {mainText.split("<br />").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        {/* 그라데이션 적용 위치 */}
        <div
          className="absolute left-0 w-full h-[47px] z-20"
          style={{
            top: "-30px",
            background:
              "linear-gradient(180deg, #06142D 0%, rgba(6,20,45,0) 100%)",
          }}
        />
      </div>

      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[47.23px] bg-gradient-to-b from-[#06142d]/0 to-[#06142d]" />
    </div>
  );
};

export default MobileMain;
