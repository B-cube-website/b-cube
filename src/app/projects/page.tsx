"use client";

import React, { useState } from "react";
import ActivityButton from "@/components/activityButton";
import MainBanner from "./components/MainBanner";
import SectionDesignton from "./components/SectionDesignton";
import SectionSexyIt from "./components/SectionSexyIt";
import SectionStudy from "./components/SectionStudy";
import SectionEtc from "./components/SectionEtc";
import MobileMain from "@/mobileComponents/mobileMain";
import MobileProjectButton from "./components/MobileProjectButton";
import useStore from "@/stores/useStore";
import file_image from "@/../public/file-bulb.svg";
const Project: React.FC = () => {
  const [selectedActivity, setSelectedActivity] =
    useState<string>("designthon");

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };
  const { isMobile } = useStore();
  
  const activities = [
    { label: "디자인톤", key: "designthon" },
    { label: "섹시한 IT", key: "sexyIT" },
    { label: "스터디", key: "study" },
    { label: "기타", key: "others" },
  ];

  return (
    <main>
      <div className="hidden sm:block">
        <MainBanner />
      </div>
      <div className="sm:hidden">
        <MobileMain
          svgImage={file_image}
          altText="file-bulb"
          mainText="B-CUBE의 다양한 활동들을 <br />지금 확인해 보세요"
          subText=""
        />
      </div>
      <div className="flex flex-wrap justify-center items-center w-full sm:gap-6 gap-[8px]">
        {activities.map(({ label, key }) =>
          isMobile ? (
            <MobileProjectButton
              key={key}
              activity={label}
              selected={selectedActivity === key}
              onClick={() => handleButtonClick(key)}
            />
          ) : (
            <ActivityButton
              key={key}
              activity={label}
              selected={selectedActivity === key}
              onClick={() => handleButtonClick(key)}
            />
          )
        )}
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
