import { useState, useEffect } from "react";

export default function ActivityCard({ isLoading, loadingText, activity }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // 2초마다 자동으로 카드 넘김
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % activity.length); // 순환
    }, 2000); // 2초마다 이동
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클린업
  }, [activity.length]);

  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (activity.length === 0) {
    return <p>활동 데이터가 없습니다.</p>;
  }

  // 카드들이 애니메이션으로 이동하는 translateX 값 계산
  const getTranslateX = () => `translateX(-${activeIndex * 350}px)`; // 카드 너비만큼 이동

  return (
    <section className="relative flex justify-center w-full mt-[32px] md:mt-[80px]">
      {/* 카드 리스트를 담은 애니메이션 컨테이너 */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out" // 부드러운 이동 애니메이션
          style={{ transform: getTranslateX() }}
        >
          {activity.map((item, index) => (
            <div
              key={item.id}
              className={`relative w-[250px] h-[150px] md:w-[335px] md:h-[209px] flex-shrink-0 transition-transform duration-500 ease-in-out ${
                activeIndex === index ? "scale-110" : "scale-90"
              }`} // 가운데 카드가 더 커지는 애니메이션
            >
              <img
                src={item.imagePath}
                alt={item.title}
                className="w-full h-full object-cover rounded-[20px]"
              />
              <p className="absolute inset-0 bg-gradient-to-b from-transparent to-[#14439f] flex justify-center items-end pb-8 text-[14px] md:text-[18px] font-semibold text-white text-center rounded-[20px]">
                {item.description} <br />
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}