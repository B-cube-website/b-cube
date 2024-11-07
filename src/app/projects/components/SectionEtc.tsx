import React, { useEffect, useState } from "react";
import PostPreviewSection from "./postPreview/PostPreviewSection";
import fetchPosts from "@/functions/fetchPosts";

const SectionEtc = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
    const [postsData, setPostsData] = React.useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetchPosts("/api/activities/etc", setPostsData, setError, false);
    }, []);
  

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full sm:max-w-[1280px] sm:mx-auto mx-auto sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full max-w-full sm:max-w-[1040px] sm:mt-[160px] mt-[64px] overflow-hidden px-6">
        <PostPreviewSection
          title="기타활동"
          desc="아이디어톤 등과 같이 매년 진행되는 프로젝트 외의 활동"
          postsData={postsData}
          setPostsData={setPostsData}
        />
      </div>
    </div>
  );
};

export default SectionEtc;
