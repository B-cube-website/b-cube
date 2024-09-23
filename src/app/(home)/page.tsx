import Activity from "./components/Activity";
import Article from "@/components/Article";
import Executives from "./components/Executives";

export default function Home() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center items-center p-8">
          <div className="flex justify-center items-center w-full max-w-[1440px] h-[548px] p-0 gap-2.5">
            <h1
              className="flex items-center justify-center w-full max-w-[420px] h-[330px] font-bold text-[80px] leading-[110px] text-center bg-clip-text text-transparent"
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

          <h2 className="flex items-center justify-center w-full max-w-[1320px] h-auto font-semibold text-[40px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A8B3D8] to-[#518CFF]">
            아주대학교 경영인텔리전스학과 소학회
          </h2>

          <p className="mt-[48px] w-full max-w-[1312px] h-auto flex flex-col items-center font-medium text-[24px] leading-[40px] text-center text-[#DEE5FF]">
            <span>
              B-CUBE는 최신 IT 기술을 배우는 것 뿐 아니라 이를 통한 Business Application을 구축해
            </span>
            <span>
              e-business에 대한 깊이 있는 이해 뿐만 아니라 실질적 결과물을 만드는 것을 목적으로 하는 소학회입니다
            </span>
          </p>
        </section>

        <section className="flex flex-col justify-center items-center p-8 mt-[228px]">
          <Article subject="Introduction" title="소개" />
          <div className="flex justify-between items-start w-full max-w-[1262px] gap-[140px] mt-[80px]">
            <p className="text-2xl font-bold text-[#f6f6f7]">B-CUBE의 비전</p>
            <p className="w-full max-w-[950px] font-pretendard font-medium text-[20px] leading-[40px] text-[#DEE5FF]">
              B-Cube는 최신 IT기술에 대한 이해를 바탕으로 자신이 가지고 있는
              아이디어를 실질적인 결과물로 만드는 것을 목적으로 하는
              소학회입니다. IT트렌드를 배우고 익히며 아이디어를 기획하고
              구현하는 과정에서 관련 역량을 향상시킬 수 있습니다.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center p-8 mt-[228px]">
          <Article subject="Activities" title="주요 활동" />
          <Activity />
        </section>
        
        <section className="flex flex-col justify-center items-center p-8 mt-[228px] mb-[352px]">
          <Article subject="Executives" title="현재 회장단" />
          <Executives />
        </section>
      </main>
    </>
  );
}
