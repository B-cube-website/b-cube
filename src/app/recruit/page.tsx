"use client";

import React, { useState, useRef } from "react";
import megaphone from "../../../public/megaphone.svg";
import email_logo2 from "../../../public/email_logo2.svg";
import kakaoTalk_logo2 from "../../../public/kakakoTalk_logo2.svg";
import insta_logo2 from "../../../public/insta_logo2.svg";
import Image from "next/image";

export default function Recruit() {
  const [selectedActivity, setSelectedActivity] = useState("designathon");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = (activity) => {
    setSelectedActivity(activity);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      console.log("Uploading file...");

      const uploadResponse = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (uploadResponse.ok) {
        console.log("Upload successful!");
      } else {
        console.log("Upload failed!", await uploadResponse.text());
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #06132D 79%, #0E2F6F 100%)",
      }}
    >
      <div className="flex flex-col justify-center items-center"></div>

      {/* 페이지의 원래 코드 */}
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto h-[700px]">
        <div className="w-[733.58px] h-[733.58px] absolute left-[756.58px] top-[82.11px] object-cover">
          <Image src={megaphone} alt="megaphone" />
        </div>
        <div className="w-full h-full absolute left-0 top-0 backdrop-blur-[8px]" />
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
        <div className="w-full h-[174px] absolute left-0 top-[525px] bg-gradient-to-b from-[#06142d]/0 to-[#06142d]" />
        <div className="flex justify-center items-center w-[170px] absolute left-[98px] top-[366px] px-12 py-4 rounded-[100px] bg-[#0E337C]/5 border border-[#191f35]">
          <p className="text-xl font-semibold text-center text-[#0E337C] whitespace-nowrap">
            지원마감
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col justify-center items-center w-full gap-2">
          <p
            className="w-full text-xl font-semibold text-center"
            style={{
              background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Introduction
          </p>
          <p className="w-full text-[40px] font-bold text-center text-[#f6f6f7]">
            모집 개요
          </p>
        </section>

        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          <div
            className="flex flex-col justify-start items-start w-full md:w-1/3 gap-6 p-9 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]/[0.1] max-w-[100%] md:max-w-[400px] h-[200px] transform scale-100 transition-transform duration-300 ease-in-out hover:scale-[var(--scale)]"
            style={{
              border: "1px solid #518CFF",
              backgroundOrigin: "border-box",
              padding: "20px",
            }}
          >
            <p className="text-[22px] font-bold text-left text-[#f6f6f7]">
              인재상
            </p>
            <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
              최신 IT 기술과 비즈니스 이해를 바탕으로 창의적 문제 해결과 협업
              능력을 갖춘 자기주도적 학습자
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-start w-full md:w-1/3 gap-6 p-9 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]/[0.1] max-w-[100%] md:max-w-[400px] h-[200px] transform scale-100 transition-transform duration-300 ease-in-out hover:scale-[var(--scale)]"
            style={{
              border: "1px solid #518CFF",
              backgroundOrigin: "border-box",
              padding: "20px",
            }}
          >
            <p className="text-[22px] font-bold text-left text-[#f6f6f7]">
              지원자격
            </p>
            <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
              IT 기술과 비즈니스에 대한 관심과 열정을 가진 경영인텔리전스학과
              학생이라면 누구나
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-start w-full md:w-1/3 gap-6 p-8 rounded-[20px] max-w-[100%] md:max-w-[400px] h-[200px] transform scale-100 transition-transform duration-300 ease-in-out hover:scale-[var(--scale)]"
            style={{
              border: "1px solid #518CFF",
              backgroundOrigin: "border-box",
              padding: "20px",
            }}
          >
            <p className="text-[22px] font-bold text-left text-[#f6f6f7]">
              지원방법
            </p>
            <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
              1차 서류 <br />
              2차 면접
            </p>
          </div>
        </div>

        <section className="flex flex-col justify-center items-center w-full gap-12 ">
          <div className="flex flex-col justify-center items-start w-full gap-2 ">
            <p
              className="w-full text-xl font-semibold text-center"
              style={{
                background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Activity
            </p>
            <p className="w-full text-[40px] font-bold text-center text-[#f6f6f7]">
              활동 분야
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center w-full gap-6">
            <button
              className={`flex justify-center items-center w-full sm:w-auto px-12 py-4 rounded-[100px] ${
                selectedActivity === "designathon"
                  ? "text-[#14439f] bg-white"
                  : "bg-[#7380b0]/5 border-[#191f35] text-[#7380b0]"
              } border`}
              onClick={() => handleButtonClick("designathon")}
            >
              <p className="text-xl font-semibold text-center whitespace-nowrap">
                디자인톤
              </p>
            </button>
            <button
              className={`flex justify-center items-center w-full sm:w-auto px-12 py-4 rounded-[100px] ${
                selectedActivity === "sexyIT"
                  ? "text-[#14439f] bg-white"
                  : "bg-[#7380b0]/5 border-[#191f35] text-[#7380b0]"
              } border`}
              onClick={() => handleButtonClick("sexyIT")}
            >
              <p className="text-xl font-semibold text-center whitespace-nowrap">
                섹시한 IT
              </p>
            </button>
            <button
              className={`flex justify-center items-center w-full sm:w-auto px-12 py-4 rounded-[100px] ${
                selectedActivity === "others"
                  ? "text-[#14439f] bg-white"
                  : "bg-[#7380b0]/5 border-[#191f35] text-[#7380b0]"
              } border`}
              onClick={() => handleButtonClick("others")}
            >
              <p className="text-xl font-semibold text-center whitespace-nowrap">
                기타
              </p>
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
          <div
            className="flex flex-col md:flex-row justify-start items-start w-full gap-8 px-4 sm:px-6 lg:px-8 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]"
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
                  1. 4명이 한 팀을 이루어 최신 IT 정보에 대한 카드뉴스 작성
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
            className="flex flex-col md:flex-row justify-start items-start w-full gap-8 px-4 sm:px-6 lg:px-8 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]"
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
              Contact us
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-end gap-8">
            <ContactItem
              title="Mail"
              value="bcube@ajou.ac.kr"
              color1="#195DE2"
              color2="#0E337C"
              svg={email_logo2}
              style={{ maxWidth: "240px", maxHeight: "253px", width: "100%" }}
            />
            <ContactItem
              title="KakaoTalk"
              value="@bcube"
              color1="#195DE2"
              color2="#0E337C"
              svg={kakaoTalk_logo2}
              style={{ maxWidth: "240px", maxHeight: "253px", width: "100%" }}
            />
            <ContactItem
              title="Instagram"
              value="@sexyit_season2"
              color1="#195DE2"
              color2="#0E337C"
              svg={insta_logo2}
              style={{ maxWidth: "240px", maxHeight: "253px", width: "100%" }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

interface ContactItemProps {
  title: string;
  value: string;
  color1: string;
  color2: string;
  style?: React.CSSProperties;
  svg?: any;
}

function ContactItem({
  title,
  value,
  color1,
  color2,
  svg,
  style = {},
}: ContactItemProps) {
  return (
    <div
      className="flex flex-col justify-start items-center h-[253px] w-full md:w-60 gap-6 px-20 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04] border border-[#f6f6f7]/[0.1] max-w-[100%] md:max-w-[60px] transform scale-100 transition-transform duration-300 ease-in-out hover:scale-[var(--scale)]"
      style={{
        border: "1px solid #518CFF",
        ...style,
      }}
    >
      <div
        className="flex-grow-0 flex-shrink-0 w-[82px] h-[82px] relative"
        style={{
          background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
          borderRadius: "50%",
        }}
      >
        <Image src={svg} alt={`${title} logo`} />
      </div>
      <div className="flex flex-col justify-start items-center gap-2">
        <p
          className="text-[16px] font-bold text-center"
          style={{
            background: "linear-gradient(90deg, #7281B3 0%, #518CFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </p>
        <p className="text-[20px] font-semibold text-center text-[#f6f6f7]">
          {value}
        </p>
      </div>
    </div>
  );
}
