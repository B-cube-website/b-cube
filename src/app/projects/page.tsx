"use client";

import React, { useState } from "react";
import ActivityButton from "../../components/activityButton";
import MainBanner from "./components/MainBanner";
import SectionDesignton from "./components/SectionDesignton";
import SectionSexyIt from "./components/SectionSexyIt";
import SectionStudy from "./components/SectionStudy";
import SectionEtc from "./components/SectionEtc";



const Project: React.FC = () => {
  const [selectedActivity, setSelectedActivity] =
    useState<string>("designathon");

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <MainBanner />
      <div className="flex flex-wrap justify-center items-center w-full gap-6">
        <ActivityButton
          activity="디자인톤"
          selected={selectedActivity === "designathon"}
          onClick={() => handleButtonClick("designathon")}
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
      <div className={selectedActivity === "designathon" ? "block" : "hidden"}>
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
