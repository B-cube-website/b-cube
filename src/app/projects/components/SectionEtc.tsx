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
    <PostPreviewSection title="기타활동" desc="아이디어톤 등과 같이 매년 진행되는 프로젝트 외의 활동들이에요." postsData={postsData} setPostsData={setPostsData}/>
  );
};

export default SectionEtc;
