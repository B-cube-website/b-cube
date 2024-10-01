import React, { useEffect } from "react";
import ProjectDescription from "../ProjectDescription";
import PostPreviewBox from "./PostPreviewBox";
import ActivityButton from "@/components/activityButton";

interface PostPreviewSectionProps {
  title: string;
  desc: string;
  postsData: any[];
  setPostsData: React.Dispatch<React.SetStateAction<any[]>>;
}

const PostPreviewSection: React.FC<PostPreviewSectionProps> = ({ title, desc, postsData, setPostsData }) => {
  const [selectedActivity, setSelectedActivity] = React.useState<string>("더보기");

  useEffect(() => {
    console.log("temp");
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
              image={item.imageUrl}
              year={item.year}
              title={item.title}
              participants={item.participants}
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
