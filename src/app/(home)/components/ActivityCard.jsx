import { useEffect, useRef } from "react";

export default function ActivityCard({ isLoading, loadingText, activity }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current && activity.length > 0) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollWidth = scrollContainerRef.current.scrollWidth;

      const scrollToCenter = (scrollWidth - containerWidth) / 2;
      scrollContainerRef.current.scrollLeft = scrollToCenter;
    }
  }, [activity]); // activity가 변경될 때만 실행

  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (activity.length === 0) {
    return <p>활동 데이터가 없습니다.</p>;
  }

  return (
    <section className="flex justify-center w-full mt-[80px]">
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto flex items-center px-[32px] scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-[64px] w-max">
          {activity.map((item) => (
            <div
              key={item.id}
              className="relative w-[335px] h-[209px] flex-shrink-0"
              style={{ scrollSnapAlign: "center" }}
            >
              <img
                src={item.image_path}
                alt={item.title}
                className="w-full h-full object-cover rounded-[20px]"
              />
              <p className="absolute inset-0 bg-gradient-to-b from-transparent to-[#14439f] flex justify-center items-end pb-8 text-[18px] font-semibold text-white text-center rounded-[20px]">
                {item.explain}
                <br />
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
