import React from 'react';

interface PostPreviewBoxProps {
  year: string;
  title: string;
  participants: string[];
}

const PostPreviewBox: React.FC<PostPreviewBoxProps> = ({ year, title, participants }) => {
  return (
    <div>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-2 my-2">
        <div className="p-4">
          <div className="relative h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <p className='mt-4'>{year}</p>
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate my-1">
            {title}
          </h5>
          <p className='my-1'>{participants.join(', ')}</p> {/* 배열을 문자열로 변환 */}
        </div>
        <div className="p-6 pt-0"></div>
      </div>
    </div>
  );
};

export default PostPreviewBox;
