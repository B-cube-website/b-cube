import React from 'react';
import PhotoWithTitleBoxProps from '@/type/PhotoWithTitleBoxProps';


const PhotoWithTitleBox = (
  contents: PhotoWithTitleBoxProps[]
) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="text-2xl font-semibold">B-CUBE</div>
      <ul className="flex space-x-4">
        {
          contents.map((content) => (
            <li key={content.id}>
              <a href={content.link}>
                사진
                {content.title}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default PhotoWithTitleBox;
