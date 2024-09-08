import React from "react";
import ProjectDescription from "./ProjectDescription";

const SectionStudy = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
      <ProjectDescription title="스터디" desc="파이썬, JAVA 등 실제 업무에 사용되는 프로그래밍 언어를 재우고 활용해보는 정기 활동이에요." />
      <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
        test1
      </section>
    </div>
  );
};

export default SectionStudy;
