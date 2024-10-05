"use client";

import React, { useState } from "react";
import ActivityButton from "@/components/activityButton";
import MainBanner from "./components/MainBanner";
import SectionDesignton from "./components/SectionDesignton";
import SectionSexyIt from "./components/SectionSexyIt";
import SectionStudy from "./components/SectionStudy";
import SectionEtc from "./components/SectionEtc";
import MobileMain from "@/mobileComponents/mobileMain";

const Project: React.FC = () => {
  const [selectedActivity, setSelectedActivity] =
    useState<string>("designthon");

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <div className="hidden lg:block">
        <MainBanner />
      </div>
      <div className="lg:hidden">
        <MobileMain
          svgImage="/file-bulb.png"
          altText="file-bulb"
          mainText="B-CUBE의 다양한 활동들을 지금 확인해 보세요"
          subText=""
        />
      </div>
      <div className="flex flex-wrap justify-center items-center w-full gap-6">
        <ActivityButton
          activity="디자인톤"
          selected={selectedActivity === "designthon"}
          onClick={() => handleButtonClick("designthon")}
        />
        <ActivityButton
          activity="섹시한 IT"
          selected={selectedActivity === "sexyIT"}
          onClick={() => handleButtonClick("sexyIT")}
        />
        <ActivityButton
          activity="스터디"
          selected={selectedActivity === "study"}
          onClick={() => handleButtonClick("study")}
        />
        <ActivityButton
          activity="기타"
          selected={selectedActivity === "others"}
          onClick={() => handleButtonClick("others")}
        />
      </div>
      <div className={selectedActivity === "designthon" ? "block" : "hidden"}>
        <SectionDesignton />
      </div>
      <div className={selectedActivity === "sexyIT" ? "block" : "hidden"}>
        <SectionSexyIt />
      </div>
      <div className={selectedActivity === "study" ? "block" : "hidden"}>
        <SectionStudy />
      </div>
      <div className={selectedActivity === "others" ? "block" : "hidden"}>
        <SectionEtc />
      </div>
    </main>
  );
};

export default Project;
