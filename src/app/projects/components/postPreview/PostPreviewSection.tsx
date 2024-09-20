import React, { useEffect } from "react";
import ProjectDescription from "../ProjectDescription";
import PostPreviewBox from "./PostPreviewBox";
import ActivityButton from "@/components/activityButton";

interface PostPreviewSectionProps {
  title: string;
  desc: string;
}

const PostPreviewSection: React.FC<PostPreviewSectionProps> = ({ title, desc }) => {
  const [selectedActivity, setSelectedActivity] = React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);

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
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-12 sm:gap-20 px-4 sm:px-6 lg:px-8">
      <ProjectDescription title={title}>
        {desc}
      </ProjectDescription>
      <section className="flex flex-col justify-center items-center w-full gap-8 sm:gap-16 relative pb-20 sm:pb-[120px]">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 p-4 sm:p-6">
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

export default PostPreviewSection;
