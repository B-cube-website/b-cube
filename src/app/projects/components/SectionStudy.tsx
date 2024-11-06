import React, { useEffect, useState } from "react";
import PostPreviewSection from "./postPreview/PostPreviewSection";
import fetchPosts from "@/functions/fetchPosts";

const SectionStudy = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts("/api/activities/study", setPostsData, setError, false);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full sm:max-w-[1280px] sm:mx-auto mx-auto px-6 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full max-w-full sm:max-w-[1040px] sm:mt-[160px] mt-[64px] overflow-hidden">
        <PostPreviewSection
          title="스터디"
          desc="파이썬, JAVA 등 실제 업무에 사용되는 프로그래밍 언어를 배우고 활용해보는 정기 활동"
          postsData={postsData}
          setPostsData={setPostsData}
        />
      </div>
    </div>
  );
};

export default SectionStudy;
