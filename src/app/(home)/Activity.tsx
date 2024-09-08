"use client";

import { useEffect, useRef } from "react";

interface Activity {
  id: number;
  explain: string;
  title: string;
  image_path: string;
}

const mockData: Activity[] = [
  {
    id: 1,
    explain: "귀여워 고양이 춘시기",
    title: "춘식핑",
    image_path: "/cat_image.jpg",
  },
  {
    id: 2,
    explain: "귀여워 고양이 춘시기",
    title: "춘식핑",
    image_path: "/cat_image.jpg",
  },
  {
    id: 3,
    explain: "귀여워 고양이 춘시기",
    title: "춘식핑",
    image_path: "/cat_image.jpg",
  },
  {
    id: 4,
    explain: "귀여워 고양이 춘시기",
    title: "춘식핑",
    image_path: "/cat_image.jpg",
  },
  {
    id: 5,
    explain: "귀여워 고양이 춘시기",
    title: "춘식핑",
    image_path: "/cat_image.jpg",
  },
];

export default function Activity() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const scrollWidth = scrollContainerRef.current.scrollWidth;

      const scrollToCenter = (scrollWidth - containerWidth) / 2;
      scrollContainerRef.current.scrollLeft = scrollToCenter;
    }
  }, []);

  return (
    <div className="flex justify-center w-full mt-[80px]">
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto flex items-center px-[32px] scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-[64px] w-max">
          {mockData.map((item) => (
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
    </div>
  );
}
