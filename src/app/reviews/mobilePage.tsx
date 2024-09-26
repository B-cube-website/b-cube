"use client";

import React, { useState } from "react";
import MobileMain from "@/mobileComponents/mobileMain";
import ActivityButton from "@/components/activityButton";
import SectionOBinterview from "./components/SectionOBinterview";
import SectionActivityPhoto from "./components/SectionActivityPhoto";

export default function Review() {
  const [selectedActivity, setSelectedActivity] =
    useState<string>("OBinterview");

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <MobileMain
        svgImage="/ballon.svg"
        altText="ballon"
        mainText="B-CUBE의 생생한 후기를<br />확인해 보세요."
      />

      <div className="flex flex-nowrap justify-center items-center w-full gap-6">
        <ActivityButton
          activity="OB인터뷰"
          selected={selectedActivity === "OBinterview"}
          onClick={() => handleButtonClick("OBinterview")}
        />
        <ActivityButton
          activity="활동사진"
          selected={selectedActivity === "ActivityPhoto"}
          onClick={() => handleButtonClick("ActivityPhoto")}
        />
      </div>
      {selectedActivity === "OBinterview" && <SectionOBinterview />}
      {selectedActivity === "ActivityPhoto" && <SectionActivityPhoto />}
    </main>
  );
}
