import Activity from "./components/Activity";
import Article from "@/components/Article";
import Executives from "./components/Executives";
// import CenterMode from "./components/ActivityCard";
import MobileActivity from "./components/MobileActivity";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="flex flex-col justify-center items-center p-8">
          <div className="mt-[64px] flex justify-center items-center w-full h-auto md:h-[548px] gap-2.5">
            <h1
              className="flex items-center justify-center w-full font-bold text-center text-[40px] leading-[50px] md:text-[80px] md:leading-[110px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "radial-gradient(87.73% 87.73% at 50% 58.48%, #F6F6F7 41.5%, #14439F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BROAD
              <br />
              BUSINESS
              <br />
              BUILDER
            </h1>
          </div>

          <h2
            className="mt-[128px] flex items-center justify-center w-full font-semibold text-xl md:text-[40px] md:leading-[40px] text-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #A8B3D8 37.39%, #518CFF 61.51%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            아주대학교 경영인텔리전스학과 소학회
          </h2>

          <p className="mt-[32px] md:mt-[48px] w-full flex flex-col items-center text-center text-sm md:text-[24px] leading-[20px] md:leading-[40px] text-[#DEE5FF] font-medium">
            <span>
              B-CUBE는 최신 IT 기술을 배우는 것 뿐 아니라 이를 통한 Business
              Application을 구축해
            </span>
            <span>
              e-business에 대한 깊이 있는 이해 뿐만 아니라 실질적 결과물을
              만드는 것을 목적으로 하는 소학회입니다
            </span>
          </p>
        </section>

        <section className="flex flex-col justify-center items-center mt-[192px] md:mt-[228px] px-[28px] md:px-0 w-full md:w-[1280px] mx-auto">
          <Article subject="Introduction" title="소개" />
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start mt-8 md:mt-20 gap-4 md:gap-16">
            <p className="text-center md:text-left text-[16px] md:text-2xl font-bold text-[#f6f6f7] md:w-1/5">
              B-CUBE의 비전
            </p>
            <p className="text-left text-[14px] leading-5 md:text-[20px] md:leading-10 text-[#DEE5FF] md:w-4/5">
              B-Cube는 최신 IT기술에 대한 이해를 바탕으로 자신이 가지고 있는
              아이디어를 실질적인 결과물로 만드는 것을 목적으로 하는
              소학회입니다. IT트렌드를 배우고 익히며 아이디어를 기획하고
              구현하는 과정에서 관련 역량을 향상시킬 수 있습니다.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center mt-[160px] md:mt-[228px]">
          <Article subject="Activities" title="주요 활동" />
          <MobileActivity />
        </section>

        <section className="flex flex-col justify-center items-center mt-[160px] md:mt-[228px] md:mb-[352px] mb-[224px]">
          <Article subject="Executives" title="현재 회장단" />
          <Executives />
        </section>
      </main>
    </>
  );
}
