"use client";

import React, { useState } from "react";
import MobileMain from "@/mobileComponents/mobileMain";
import ActivityButton from "@/components/activityButton";
import SectionOBinterview from "./components/SectionOBinterview";
import SectionActivityPhoto from "./components/SectionActivityPhoto";
import useStore from "@/stores/useStore";
import MobileButton from "@/mobileComponents/mobileButton";

export default function Review() {
  const selectedActivity = useStore((state) => state.selectedActivity);
  const setSelectedActivity = useStore((state) => state.setSelectedActivity);

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <MobileMain
        svgImage="/ballon.svg"
        altText="ballon"
        mainText="B-CUBE의 생생한 후기를<br />확인해 보세요"
      />

      <div className="flex flex-nowrap justify-center items-center gap-[16px] w-full">
        <MobileButton
          activity="OB인터뷰"
          selected={selectedActivity === "OBinterview"}
          onClick={() => handleButtonClick("OBinterview")}
        />
        <MobileButton
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
