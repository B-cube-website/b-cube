import React, { useEffect } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import PostPreviewSection from "./postPreview/PostPreviewSection";

const SectionDesignton = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
      });
  };

  useEffect(() => {
    setPostsData([
      {
        title: "글로밋",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: ["이다은", "박성우", "모지혁", "심예은"],
      },
      {
        title: "아주대 캠퍼스맵",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: ["정민태", "윤예림", "성하솔", "원동혁"],
      },
      {
        title: "치토의 기록집",
        description: "게임같은 기록 시스템",
        image: "/cat_image.jpg",
        year: "2023",
        names: ["조국", "정혜진", "심푸름", "조우진", "차우철"],
      },
      {
        title: "디자인톤 AJOUWAY",
        description: "디자인 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: ["오준석", "장현수", "이우석", "석지민", "김영연"],
      },
    ]);
  }, []);
  return (
    <PostPreviewSection title="디자인톤" desc="팀 별로 아이디어를 기획하고 구체화하여 앱 서비스를 기획하는 활동" />
    );
};

export default SectionDesignton;
