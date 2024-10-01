import React, { useEffect } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import PostPreviewSection from "./postPreview/PostPreviewSection";

const SectionStudy = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);

  useEffect(() => {
    setPostsData([
      {
        title: "파이썬 스터디",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: [],
      },
      {
        title: "JAVA 스터디",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: [],
      },
      {
        title: "C++ 스터디",
        description: "게임같은 기록 시스템",
        image: "/cat_image.jpg",
        year: "2023",
        names: [],
      },
      {
        title: "C# 스터디",
        description: "디자인 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: [],
      },
    ]);
  }, []);

  return (
    <PostPreviewSection title="스터디" desc="파이썬, JAVA 등 실제 업무에 사용되는 프로그래밍 언어를 배우고 활용해보는 정기 활동이에요." postsData={postsData} setPostsData={setPostsData}/>
  );
};

export default SectionStudy;
