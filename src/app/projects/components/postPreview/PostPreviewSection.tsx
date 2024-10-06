import React, { useState, useEffect } from "react";
import ProjectDescription from "../ProjectDescription";
import PostPreviewBox from "./PostPreviewBox";
import ActivityButton from "@/components/activityButton";

interface PostPreviewSectionProps {
  title: string;
  desc: string;
  postsData: any[];
  setPostsData: React.Dispatch<React.SetStateAction<any[]>>;
}

const PostPreviewSection: React.FC<PostPreviewSectionProps> = ({ title, desc, postsData }) => {
  const [selectedActivity, setSelectedActivity] = useState<string>("더보기");
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개의 포스트만 표시

  // "더보기" 버튼 클릭 시 6개의 포스트를 추가로 표시
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-12 sm:gap-20 px-4 sm:px-6 lg:px-8">
      <ProjectDescription title={title}>
        {desc}
      </ProjectDescription>
      <section className="flex flex-col justify-center items-center w-full gap-8 sm:gap-16 relative pb-20 sm:pb-[120px]">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 py-4 sm:py-6">
          {postsData.slice(0, visiblePosts).map((item, index) => (
            <PostPreviewBox
              key={index}
              image={item.imageUrl}
              year={item.year}
              title={item.title}
              participants={item.participants}
              url={item.url}
            />
          ))}
        </div>
        {visiblePosts < postsData.length && (
          <ActivityButton
            activity="더보기"
            selected={selectedActivity === "더보기"}
            onClick={loadMorePosts}
          />
        )}
      </section>
    </div>
  );
};

export default PostPreviewSection;