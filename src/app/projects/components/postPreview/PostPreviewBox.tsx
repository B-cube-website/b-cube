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
      <div className="relative flex w-96 flex-col rounded-xl border text-white shadow-md mx-2 my-2 border-white">
        <div className="p-4">
          <div className="relative h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </div>
          <p className="mt-4">{year}</p>
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate my-1">
            {title}
          </h5>
          {participants.length > 0 && (
            <p className="my-1 text-gray-400">{participants.join(", ")}</p>
          )}
        </div>
        <div className="p-6 pt-0"></div>
      </div>
    </div>
  );
};

export default PostPreviewBox;
