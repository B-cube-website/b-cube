import React from 'react';
import Image from "next/image";

interface CardProps {
  title: string;
  date: string;
  imageSrc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, date, imageSrc, link }) => {
  return (
    <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-lg">
      <Image src={imageSrc} alt={title} width={40} height={40} className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-800/50 to-transparent" />
      <div className="p-4 absolute bottom-4 left-4 text-white" >
        <div>{date}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {/* <p className="text-sm text-gray-200 mt-2">{link}</p> */}
      </div>
    </div>
  );
};

export default Card;


<div className="">
{/* 배경 이미지 */}
<img
  src="/path-to-your-image.jpg"
  alt="Live Commerce"
  className="w-full h-full object-cover"
/>

{/* 그라데이션 오버레이 */}


{/* 텍스트 */}

</div>