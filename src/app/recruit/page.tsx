export default function Recruit() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #06132D 79%, #14439F 100%)",
      }}
    >
      <div className="w-full h-[700px] relative overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <img
          src="recruit_megaphone.svg"
          className="w-[733.58px] h-[733.58px] absolute left-1/2 transform -translate-x-1/2 top-[82.11px] opacity-40 object-cover"
          alt="Megaphone"
        />
        <div className="w-full h-[700px] absolute left-0 top-0 bg-[#06142d]/5 backdrop-blur-[20px]" />
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
        <div className="flex justify-center items-center w-[170px] absolute left-24 top-[366px] px-12 py-4 rounded-[100px] bg-[#0E337C]/5 border border-[#191f35]">
          <p className="text-xl font-semibold text-center text-[#0E337C] whitespace-nowrap">
            지원마감
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col justify-center items-start w-full gap-2">
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
          <div className="flex flex-col justify-start items-start w-full md:w-1/3 h-[200px] gap-6 p-9 rounded-[20px] bg-[#f6f6f7]/[0.04]">
            <p className="text-[22px] font-bold text-left text-[#f6f6f7]">
              인재상
            </p>
            <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
              최신 IT 기술과 비즈니스 이해를 바탕으로 창의적 문제 해결과 협업
              능력을 갖춘 자기주도적 학습자
            </p>
          </div>
          <div className="flex flex-col justify-start items-start w-full md:w-1/3 h-[200px] gap-6 p-9 rounded-[20px] bg-[#f6f6f7]/[0.04]">
            <p className="text-[22px] font-bold text-left text-[#f6f6f7]">
              지원자격
            </p>
            <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
              IT 기술과 비즈니스에 대한 관심과 열정을 가진 경영인텔리전스학과
              학생이라면 누구나
            </p>
          </div>
          <div className="flex flex-col justify-start items-start w-full md:w-1/3 h-[200px] gap-6 p-9 rounded-[20px] bg-[#f6f6f7]/[0.04]">
            <p className="text-[22px] font-bold text-left text-[#f6f6f7]">
              지원방법
            </p>
            <p className="text-lg font-medium text-left text-[#ddddde] leading-[30px]">
              1차 서류 <br />
              2차 면접
            </p>
          </div>
        </div>

        <section className="flex flex-col justify-center items-center w-full gap-12">
          <div className="flex flex-col justify-center items-start w-full gap-2">
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
          <div className="flex justify-center items-center w-full gap-6">
            <div className="flex justify-center items-center w-[170px] px-12 py-4 rounded-[100px] bg-white/90 border border-white">
              <p
                className="text-xl font-semibold text-center text-[#14439f]"
                whitespace-nowrap
              >
                디자인톤
              </p>
            </div>
            <div className="flex justify-center items-center w-[170px] px-12 py-4 rounded-[100px] bg-[#7380b0]/5 border border-[#191f35]">
              <p className="text-xl font-semibold text-center text-[#7380b0] whitespace-nowrap">
                섹시한 IT
              </p>
            </div>
            <div className="flex justify-center items-center w-[170px] px-12 py-4 rounded-[100px] bg-[#7380b0]/5 border border-[#191f35]">
              <p className="text-xl font-semibold text-center text-[#7380b0]">
                기타
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full gap-16">
          <div className="flex justify-start items-start w-full md:w-[1300px] gap-24 px-4 sm:px-6 lg:px-8 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04]">
            <p
              className="w-[317px] text-[30px] font-bold text-left text-[#f6f6f7]"
              whitespace-nowrap
            >
              다음과 같은 활동을 합니다
            </p>
            <p className="text-[18px] font-medium text-left text-[#f6f6f7] leading-[40px]">
              1. 서비스 기획: 주어진 주제에 따라 팀별로 웹/앱 서비스 기획.
              피그마로 UI 및 프로토타입까지 완성
              <br />
              2. 발표 및 평가: 종강 전후에 팀별 발표 예정. 현업에 계신 졸업생
              선배님들이 평가 및 피드백 제공
              <br />
              3. 서비스 개발 및 배포: 선정된 서비스는 여름방학부터 개발을
              시작해서 최종적으로 배포까지 고려
              <br />
              4. 학술제 참가: 구현된 서비스로 경영대학 학술제 참가 예정
            </p>
          </div>
          <div className="flex justify-start items-start w-full md:w-[1300px] gap-24 px-4 sm:px-6 lg:px-8 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04]">
            <p className="w-[317px] text-[30px] font-bold text-left text-[#f6f6f7]">
              이런 멤버를 찾습니다
            </p>
            <p className="text-[18px] font-medium text-left text-[#f6f6f7] leading-[40px]">
              1. 새로운 서비스에 대한 아이디어 혹은 기존 문제를 색다르게 접근할
              수 있으신 분
              <br />
              2. 서비스 아이디어를 시각적으로 구현할 수 있으신 분
              <br />
              3. 피그마 툴을 사용한 UI/UX 디자인을 할 수 있으신 분
              <br />
              4. 나만의 서비스를 만들어 배포까지 해보고 싶으신 분
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full gap-16">
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
            />
            <ContactItem
              title="KakaoTalk"
              value="@bcube"
              color1="#195DE2"
              color2="#0E337C"
            />
            <ContactItem
              title="Instagram"
              value="@sexyit_season2"
              color1="#195DE2"
              color2="#0E337C"
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
}

function ContactItem({ title, value, color1, color2 }: ContactItemProps) {
  return (
    <div className="flex flex-col justify-start items-center h-[253px] w-full md:w-60 gap-6 px-20 py-12 rounded-[20px] bg-[#f6f6f7]/[0.04]">
      <div
        className="flex-grow-0 flex-shrink-0 w-[82px] h-[82px] relative"
        style={{
          background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
          borderRadius: "50%",
        }}
      />
      <div className="flex flex-col justify-start items-center gap-2">
        <p className="text-[16px] font-bold text-center">{title}</p>
        <p className="text-[20px] font-semibold text-center text-[#f6f6f7]">
          {value}
        </p>
      </div>
    </div>
  );
}
