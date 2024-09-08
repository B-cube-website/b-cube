import React from "react";
import ProjectDescription from "./ProjectDescription";

const SectionEtc = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
      <ProjectDescription title="기타활동" desc="아이디어톤 등과 같이 매년 진행되는 프로젝트 외의 활동들이에요." />
      <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
        test1
      </section>
    </div>
  );
};

export default SectionEtc;
