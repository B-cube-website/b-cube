"use client";

import React from "react";
import Image from "next/image";
import ActivityButton from "@/components/activityButton";
import ballon from "../../../public/ballon.svg";
import SectionOBinterview from "./components/SectionOBinterview";
import SectionActivityPhoto from "./components/SectionActivityPhoto";
import useStore from "@/stores/useStore";

export default function Review() {
  const selectedActivity = useStore((state) => state.selectedActivity);
  const setSelectedActivity = useStore((state) => state.setSelectedActivity);

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto h-[700px]">
        <div
          className="absolute"
          style={{
            width: "calc(100% - 45.5% - 7%)",
            height: "calc(100% - 45.5% - 7%)",
            left: "45.5%",
            right: "7%",
            top: "82.11px",
            bottom: "32px",
          }}
        >
          <Image src={ballon} alt="ballon" className="object-contain" />
        </div>
        <div className="flex flex-col justify-start items-start absolute left-[98px] top-[117px] gap-6">
          <h1
            className="text-5xl font-bold text-left text-white leading-normal"
            style={{ maxWidth: "38rem" }}
          >
            B-CUBE의 생생한 후기들을 지금 확인해 보세요
          </h1>
        </div>
      </div>

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
