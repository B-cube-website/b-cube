import React, { useEffect } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import ActivityButton from "@/app/recruit/activityButton";

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
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
      <ProjectDescription title="스터디">
        파이썬, JAVA 등 실제 업무에 사용되는 프로그래밍 언어를 재우고 활용해보는
        정기 활동이에요.
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

export default SectionStudy;
