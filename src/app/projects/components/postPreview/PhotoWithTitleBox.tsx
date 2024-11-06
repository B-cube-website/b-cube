import React from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from "@/stores/useStore";

interface CardProps {
  title?: string;
  date?: string;
  imageSrc?: string;
  link?: string;
}

const PhotoWithTitleBox: React.FC<CardProps> = ({
  title,
  date,
  imageSrc,
  link = "#",
}) => {
  const { isMobile } = useStore();
  const boxWidth = isMobile ? "w-full max-w-[calc(100vw-48px)]" : "w-[325px]";
  const imageSize = isMobile ? 310 : 293;

  return title && date && imageSrc ? (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`${boxWidth} h-auto border rounded-xl bg-[#f6f6f7]/[0.04] border-[#518CFF] p-4`}
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={title}
            width={imageSize}
            height={imageSize}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-800/50 to-transparent" />
          <div className="p-4 absolute bottom-1 left-4 text-white">
            <div>{date}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="w-80 h-80 rounded-xl bg-gray-200 flex items-center justify-center">
      {/* Placeholder content if data is missing */}
      <span className="text-gray-500">No Data Available</span>
    </div>
  );
};

export default PhotoWithTitleBox;
