import React, { useEffect } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import ActivityButton from "@/app/recruit/components/activityButton";
import PostPreviewSection from "./postPreview/PostPreviewSection";

const SectionEtc = () => {
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
    <PostPreviewSection title="기타활동" desc="아이디어톤 등과 같이 매년 진행되는 프로젝트 외의 활동들이에요." />
  );
};

export default SectionEtc;
