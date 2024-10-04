import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  date: string;
  imageSrc: string;
  link?: string;
}
// relative flex w-96 flex-col   text-white shadow-md mx-2 my-2
const Card: React.FC<CardProps> = ({ title, date, imageSrc, link = "#" }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-80 h-80 border rounded-xl bg-[#f6f6f7]/[0.04] border-[#518CFF] p-3">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={title}
            layout="responsive"
            width={320}
            height={320}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-800/50 to-transparent" />
          <div className="p-4 absolute bottom-1 left-4 text-white">
            <div>{date}</div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {/* <p className="text-sm text-gray-200 mt-2">{link}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
