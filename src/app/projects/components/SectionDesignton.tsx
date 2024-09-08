import React, { useEffect } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import ActivityButton from "@/app/recruit/activityButton";

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
        names: ["이다운", "박성우", "모지혁", "심예은"],
      },
      {
        title: "아주대 캠퍼스맵",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        year: "2023",
        names: ["정민태", "윤예림", "성하솔", "원동혁"],
      },
      {
        title: "치도의 기록집",
        description: "게임같은 기록 시스템",
        image: "/cat_image.jpg",
        year: "2023",
        names: ["조국", "정혜진", "심주름", "조우진", "차우철"],
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
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
      <ProjectDescription title="디자인톤">
        팀 별로 아이디어를 기획하고 구체화하여 앱 서비스를 기획하는 활동
      </ProjectDescription>
      <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-6">
          {postsData.map((item, index) => (
            <PostPreviewBox
              key={index}
              image={item.image}
              year={item.year}
              title={item.title}
              participants={item.names}
            />
          ))}
        </div>
        <ActivityButton
          activity="더보기"
          selected={selectedActivity === "더보기"}
          onClick={() => alert("더보기")}
        />
      </section>
    </div>
  );
};

export default SectionDesignton;
