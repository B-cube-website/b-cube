"use client";

import React, { useState } from "react";
import megaphone from "../../../public/megaphone.svg";
import Image from "next/image";
import Card from "./card";
import ActivityButton from "./activityButton";
import ContactItem from "./contactItem";
import SectionHeader from "../../components/sectionHeader";
import email_logo2 from "../../../public/email_logo2.svg";
import kakaoTalk_logo2 from "../../../public/kakakoTalk_logo2.svg";
import insta_logo2 from "../../../public/insta_logo2.svg";

export default function Recruit() {
  const [selectedActivity, setSelectedActivity] =
    useState<string>("designathon");

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto h-[700px]">
        <div className="w-[733.58px] h-[733.58px] absolute left-[756.58px] top-[82.11px] object-cover">
          <Image src={megaphone} alt="megaphone" />
        </div>
        <div className="flex flex-col justify-start items-start absolute left-[98px] top-[117px] gap-6">
          <p className="text-5xl font-bold text-left text-white">
            지금은 모집기간이 아닙니다
          </p>
          <p className="text-2xl font-bold text-left text-[#f6f6f7]">
            2024년 1학기 모집이 완료되었습니다!
            <br />
            다음 기수는 2024년 9월에 예정되어 있습니다.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Introduction" subtitle="모집 개요" />
        <div
          className="flex flex-col md:flex-row justify-between w-full gap-6"
          style={{ whiteSpace: "pre-line" }}
        >
          <Card
            title="인재상"
            content="최신 IT 기술과 비즈니스 이해를 바탕으로 창의적 문제 해결과 협업 능력을 갖춘 자기주도적 학습자"
          />
          <Card
            title="지원자격"
            content="IT 기술과 비즈니스에 대한 관심과 열정을 가진 경영인텔리전스학과 학생이라면 누구나"
          />
          <Card
            title="지원방법"
            content={["1차 서류", "2차 면접"].join("\n")}
          />
        </div>

        <SectionHeader title="Activity" subtitle="활동 분야" />
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
            activity="기타"
            selected={selectedActivity === "others"}
            onClick={() => handleButtonClick("others")}
          />
        </div>

        <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
          <div
            className="flex flex-col md:flex-row justify-start items-start w-full gap-8 px-4 sm:px-6 lg:px-8 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]"
            style={{
              maxWidth: "1300px",
              border: "1px solid #518CFF",
              backgroundOrigin: "border-box",
            }}
          >
            <p
              className="text-[24px] font-bold text-left text-[#f6f6f7] whitespace-nowrap flex-shrink-0"
              style={{ minWidth: "317px" }}
            >
              다음과 같은 활동을 합니다
            </p>
            <p className="flex-grow text-[16px] font-medium text-left text-[#f6f6f7] leading-[30px]">
              {selectedActivity === "designathon" && (
                <>
                  1. 서비스 기획: 주어진 주제에 따라 팀별로 웹/앱 서비스 기획.
                  피그마로 UI 및 프로토타입까지 완성
                  <br />
                  2. 발표 및 평가: 종강 전후에 팀별 발표 예정. 현업에 계신
                  졸업생 선배님들이 평가 및 피드백 제공
                  <br />
                  3. 서비스 개발 및 배포: 선정된 서비스는 여름방학부터 개발을
                  시작해서 최종적으로 배포까지 고려
                  <br />
                  4. 학술제 참가: 구현된 서비스로 경영대학 학술제 참가 예정
                </>
              )}
              {selectedActivity === "sexyIT" && (
                <>
                  1. 4명이 한 팀을 이루어 최신 IT 정보에 대한 카드뉴스 작성 후
                  섹시한 IT 인스타에 업로드
                  <br />
                  2. 2주 or 3주에 하나씩 작성
                  <br />
                  3. 부회장과 OT, 2주 or 3주마다 회의 진행
                </>
              )}
              {selectedActivity === "others" && (
                <>
                  1. 파이썬 스터디는 신입생 모집 후 진행
                  <br />
                  2. 자율 스터디는 자바로 진행 예정
                  <br />
                  3. 학습 공동체 신청해서 지원
                </>
              )}
            </p>
          </div>

          <div
            className="flex flex-col md:flex-row justify-start items-start w-full gap-8 px-4 sm:px-6 lg:px-8 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]"
            style={{
              maxWidth: "1300px",
              backgroundOrigin: "border-box",
            }}
          >
            <p
              className="text-[24px] font-bold text-left text-[#f6f6f7] whitespace-nowrap flex-shrink-0"
              style={{ minWidth: "317px" }}
            >
              이런 멤버를 찾습니다
            </p>
            <p className="flex-grow text-[16px] font-medium text-left text-[#f6f6f7] leading-[30px]">
              {selectedActivity === "designathon" && (
                <>
                  1. 새로운 서비스에 대한 아이디어 혹은 기존 문제를 색다르게
                  접근할 수 있으신 분
                  <br />
                  2. 서비스 아이디어를 시각적으로 구현할 수 있으신 분
                  <br />
                  3. 피그마 툴을 사용한 UI/UX 디자인을 할 수 있으신 분
                  <br />
                  4. 나만의 서비스를 만들어 배포까지 해보고 싶으신 분
                </>
              )}
              {selectedActivity === "sexyIT" && (
                <>
                  1. 최신 IT 기술과 트렌드에 대한 깊은 이해와 지속적인 관심을
                  가지신 분
                  <br />
                  2. 복잡한 IT 정보를 분석하고, 이해하기 쉽게 카드뉴스로 만들어
                  낼 수 있으신 분
                </>
              )}
              {selectedActivity === "others" && (
                <>
                  이비즈 학우들과 파이썬, 자바 혹은 이외 스터디를 통해 다양한
                  IT분야를 함께 학습해 나가고 싶으신 분
                </>
              )}
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[280px]">
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <p
              className="w-full text-[40px] font-bold text-center"
              style={{
                background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Us
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-end gap-8">
            <ContactItem
              title="Mail"
              value="bcube@ajou.ac.kr"
              color1="#195DE2"
              color2="#0E337C"
              style={{ maxWidth: "240px", maxHeight: "253px", width: "100%" }}
              svg={email_logo2}
            />
            <ContactItem
              title="KakaoTalk"
              value="@bcube"
              color1="#195DE2"
              color2="#0E337C"
              style={{ maxWidth: "240px", maxHeight: "253px", width: "100%" }}
              svg={kakaoTalk_logo2}
            />
            <ContactItem
              title="Instagram"
              value="@sexyit_season2"
              color1="#195DE2"
              color2="#0E337C"
              style={{ maxWidth: "240px", maxHeight: "253px", width: "100%" }}
              svg={insta_logo2}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
