import React from 'react';
import PostPreviewBox from "@/components/postPreview/PostPreviewBox";
import RoundedRectangleButtonProps from "@/components/button/RoundedRectangleButton";
import ContentsNavigation from '@/components/ContentsNavigation/ContentsNavigation';
import MainBanner from './components/MainBanner';

const test_data: typeof RoundedRectangleButtonProps[] = [];

const Project: React.FC = () => {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <ContentsNavigation contents={test_data}/>
      <PostPreviewBox year="2022" title="My Project" participants={['John', 'Jane']} />
    </main>
  );
};

export default Project;
