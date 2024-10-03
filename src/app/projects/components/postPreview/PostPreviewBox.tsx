import Image from "next/image";
import React from "react";

interface PostPreviewBoxProps {
  image: string;
  year: string;
  title: string;
  participants: string[];
}

const PostPreviewBox: React.FC<PostPreviewBoxProps> = ({
  image,
  year,
  title,
  participants,
}) => {
  return (
    <div>
      <div className="relative flex w-80 sm:w-96 flex-col rounded-xl border text-white shadow-md mx-2 my-2 bg-[#f6f6f7]/[0.04] border-[#518CFF]">
        <div className="p-4">
          <div className="relative h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"; // 이미지가 로드되지 않으면 숨김
                (
                  e.target as HTMLImageElement
                ).parentElement!.style.backgroundColor = "lightgray"; // 숨기고 배경색 지정
              }}
            />
          </div>
          <p className="mt-4">{year}</p>
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate my-1">
            {title}
          </h5>
          {participants ? (
            <p className="my-1 text-gray-400">{participants}</p>
          ) : (
            <p className="my-1 text-gray-400"> </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPreviewBox;
