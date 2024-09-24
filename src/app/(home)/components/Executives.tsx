"use client";

import { useState } from "react";

interface Executive {
  id: number;
  member_name: string;
  role: string;
  student_id: string;
  basic_info: string;
  image_path: string;
}

const mockData: Executive[] = [
  {
    id: 1,
    member_name: "춘식이",
    role: "회장",
    student_id: "202127633",
    basic_info: "경영인텔리전스학과 21학번",
    image_path: "/cat_image.jpg",
  },
  {
    id: 2,
    member_name: "라이언",
    role: "부회장",
    student_id: "202127630",
    basic_info: "경영인텔리전스학과 21학번",
    image_path: "/cat_image.jpg",
  },
];

export default function Executives() {
  const [data, setData] = useState(mockData);
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="mt-[48px] flex justify-center items-start flex-wrap w-full gap-[128px]">
      {data.map((executive) => (
        <div
          key={executive.id}
          className="flex flex-col justify-start items-center relative gap-6"
        >
          <img
            src={executive.image_path}
            alt={`${executive.member_name}'s profile`}
            className="w-[222px] h-[222px] bg-cover bg-center rounded-full flex-none order-0"
          />

          <p className="text-center flex flex-col items-center gap-2 text-[#F6F6F7] font-semibold">
            <span className="text-[20px] leading-[24px]">{executive.role}</span>
            <span className="text-[18px] leading-[30px]">
              {executive.basic_info}
              <br />
              {executive.member_name}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}