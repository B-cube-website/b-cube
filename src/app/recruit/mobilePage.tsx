"use client";

import React, { useState } from "react";
import Image from "next/image";
import MobileMain from "@/mobileComponents/mobileMain";
import MobileArticle from "@/mobileComponents/mobileArticle";
import ActivityButton from "@/components/activityButton";
import email_logo2 from "../../../public/email_logo2.svg";
import kakaoTalk_logo2 from "../../../public/kakaoTalk_logo2.svg";
import insta_logo2 from "../../../public/insta_logo2.svg";
import Link from "next/link";

export default function Recruit() {
  const [selectedActivity, setSelectedActivity] =
    useState<string>("designathon");

  const handleButtonClick = (activity: string) => {
    setSelectedActivity(activity);
  };

  return (
    <main>
      <MobileMain
        svgImage="/megaphone.svg"
        altText="megaphone"
        mainText="지금은 모집기간이 아닙니다"
        subText="2024년 1학기 모집이 완료되었습니다!<br />다음 기수는 2024년 9월에 예정되어 있습니다."
      />
      <MobileArticle subject="Introduction" title="모집 개요" />

      <div className="flex flex-col justify-center items-center w-full mb-16 gap-6">
        <div className="flex flex-col justify-start items-start w-full max-w-[342px] gap-4 px-8 py-10 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]">
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <p className="text-xl font-bold text-left text-[#f6f6f7]">인재상</p>
            <p className="w-full text-base font-medium text-left text-[#ddddde]">
              최신 IT 기술과 비즈니스 이해를 바탕으로 창의적 문제 해결과 협업
              능력을 갖춘 자기주도적 학습자
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[342px] gap-4 px-8 py-10 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]">
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <p className="text-xl font-bold text-left text-[#f6f6f7]">
              지원자격
            </p>
            <p className="w-full text-base font-medium text-left text-[#ddddde]">
              IT 기술과 비즈니스에 대한 관심과 열정을 가진 경영인텔리전스학과
              학생이라면 누구나
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full max-w-[342px] gap-4 px-8 py-10 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]">
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <p className="text-xl font-bold text-left text-[#f6f6f7]">
              지원방법
            </p>
            <p className="w-full text-base font-medium text-left text-[#ddddde]">
              <span>1차 서류</span>
              <br />
              <span>2차 면접</span>
            </p>
          </div>
        </div>
      </div>

      <MobileArticle subject="Activity" title="활동 분야" />
      <div className="flex flex-nowrap justify-center items-center w-full mb-6 gap-6">
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

      {/* 선택된 활동에 따라 콘텐츠 표시 */}
      <section className="flex flex-col justify-center items-center w-full gap-6 relative pb-[120px]">
        <div
          className="flex flex-col justify-start items-start max-w-[342px] gap-4 px-8 py-10 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]"
          style={{
            width: "87vw",
            maxWidth: "342px",
          }}
        >
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <p className="text-xl font-bold text-left text-[#f6f6f7] whitespace-nowrap flex-shrink-0">
              다음과 같은 활동을 합니다
            </p>
            <p className="flex-grow text-base font-medium text-left text-[#ddddde] leading-[30px]">
              {selectedActivity === "designathon" && (
                <>
                  1. 서비스 기획: 주어진 주제에 따라 팀별로 웹/앱 서비스 기획.
                  피그마로 UI 및 프로토타입까지 완성
                  <br /> <br />
                  2. 발표 및 평가: 종강 전후에 팀별 발표 예정. 현업에 계신
                  졸업생 선배님들이 평가 및 피드백 제공
                  <br /> <br />
                  3. 서비스 개발 및 배포: 선정된 서비스는 여름방학부터 개발을
                  시작해서 최종적으로 배포까지 고려
                  <br /> <br />
                  4. 학술제 참가: 구현된 서비스로 경영대학 학술제 참가 예정
                </>
              )}
              {selectedActivity === "sexyIT" && (
                <>
                  1. 4명이 한 팀을 이루어 최신 IT 정보에 대한 카드뉴스 작성 후
                  섹시한 IT 인스타에 업로드
                  <br /> <br />
                  2. 2주 or 3주에 하나씩 작성
                  <br /> <br />
                  3. 부회장과 OT, 2주 or 3주마다 회의 진행
                </>
              )}
              {selectedActivity === "others" && (
                <>
                  1. 파이썬 스터디는 신입생 모집 후 진행
                  <br /> <br />
                  2. 자율 스터디는 자바로 진행 예정
                  <br /> <br />
                  3. 학습 공동체 신청해서 지원
                </>
              )}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-start items-start gap-4 px-8 py-10 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]"
          style={{
            width: "87vw",
            maxWidth: "342px",
          }}
        >
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <p className="text-xl font-bold text-left text-[#f6f6f7] whitespace-nowrap flex-shrink-0">
              이런 멤버를 찾습니다
            </p>
            <p className="flex-grow text-base font-medium text-left text-[#ddddde] leading-[30px]">
              {selectedActivity === "designathon" && (
                <>
                  1. 새로운 서비스에 대한 아이디어 혹은 기존 문제를 색다르게
                  접근할 수 있으신 분
                  <br /> <br />
                  2. 서비스 아이디어를 시각적으로 구현할 수 있으신 분
                  <br /> <br />
                  3. 피그마 툴을 사용한 UI/UX 디자인을 할 수 있으신 분
                  <br /> <br />
                  4. 나만의 서비스를 만들어 배포까지 해보고 싶으신 분
                </>
              )}
              {selectedActivity === "sexyIT" && (
                <>
                  1. 최신 IT 기술과 트렌드에 대한 깊은 이해와 지속적인 관심을
                  가지신 분
                  <br /> <br />
                  2. 복잡한 IT 정보를 분석하고, 이해하기 쉽게 카드뉴스로 만들어
                  낼 수 있으신 분
                </>
              )}
              {selectedActivity === "others" && (
                <>
                  이비즈 학우들과 파이썬, 자바 혹은 이외 스터디를 통해 다양한 IT
                  분야를 함께 학습해 나가고 싶으신 분
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center gap-8">
        <div
          className="flex flex-col justify-center items-center gap-[2px]"
          style={{ width: "87vw", maxWidth: "342px" }}
        >
          <p className="text-xl font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
            Contact us
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-6 mb-16"
          style={{
            width: "87vw",
            maxWidth: "342px",
          }}
        >
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[6.547360420227051px] px-6 py-8 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]">
            <div className="flex justify-between items-center flex-grow relative">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                <Image
                  src={email_logo2}
                  alt="Email"
                  width={30}
                  height={31}
                  className="flex-grow-0 flex-shrink-0 relative"
                />
                <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
                  Mail
                </p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#f6f6f7]">
                playground99@ajou.ac.kr
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[6.547360420227051px] px-6 py-8 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]">
            <div className="flex justify-between items-center flex-grow relative">
              <Link href="https://open.kakao.com/o/sCRuhWTg">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                  <Image
                    src={kakaoTalk_logo2}
                    alt="KakaoTalk"
                    width={30}
                    height={31}
                    className="flex-grow-0 flex-shrink-0 relative"
                  />
                  <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
                    KakaoTalk
                  </p>
                </div>
              </Link>
              <Link href="https://open.kakao.com/o/sCRuhWTg">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#f6f6f7]">
                  오픈채팅방
                </p>
              </Link>
            </div>
          </div>

          <div className="flex justify-start items-start w-full self-stretch flex-grow-0 flex-shrink-0 gap-[6.547360420227051px] px-6 py-8 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#518CFF]">
            <div className="flex justify-between items-center flex-grow relative">
              <Link href="https://www.instagram.com/sexyit_season2/">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                  <Image
                    src={insta_logo2}
                    alt="Instagram"
                    width={30}
                    height={31}
                    className="flex-grow-0 flex-shrink-0 relative"
                  />
                  <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
                    Instagram
                  </p>
                </div>
              </Link>{" "}
              <Link href="https://www.instagram.com/sexyit_season2/">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#f6f6f7]">
                  @sexyit_season2
                </p>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
