import React from 'react';
import PostPreviewBox from "@/components/postPreview/PostPreviewBox";
import BlueButton from '@/components/button/BlueButton';
import WhiteButton from '@/components/button/WhiteButton';

const Project: React.FC = () => {
  return (
    <main className="flex flex-col">
      <h2>B-Cube의 다양한 활동들을 지금 확인해 보세요</h2>
      <WhiteButton />
      <PostPreviewBox year="2022" title="My Project" participants={['John', 'Jane']} />
    </main>
  );
};

export default Project;
