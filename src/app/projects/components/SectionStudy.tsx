import React, { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import PostPreviewSection from "./postPreview/PostPreviewSection";
import fetchPosts from "@/functions/fetchPosts";

const SectionStudy = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts("/api/activities/study", setPostsData, setError);
  }, []);

  return (
    <PostPreviewSection
      title="스터디"
      desc="파이썬, JAVA 등 실제 업무에 사용되는 프로그래밍 언어를 배우고 활용해보는 정기 활동이에요."
      postsData={postsData}
      setPostsData={setPostsData}
    />
  );
};

export default SectionStudy;
