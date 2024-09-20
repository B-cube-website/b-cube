import React, { useEffect } from "react";
import ProjectDescription from "./ProjectDescription";
import Image from "next/image";
import PhotoWithTitleBox from "./postPreview/Card";
import ActivityButton from "@/components/activityButton";

const SectionSexyIt = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
      });
  };

  useEffect(() => {
    setPostsData([
      {
        title: "기계고객",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        date: "2023",
        names: ["이다운", "박성우", "모지혁", "심예은"],
      },
      {
        title: "반도체 HBM",
        description: "2023년 프로젝트",
        image: "/cat_image.jpg",
        date: "2023",
        names: ["정민태", "윤예림", "성하솔", "원동혁"],
      },
      {
        title: "라이브커머스",
        description: "게임같은 기록 시스템",
        image: "/cat_image.jpg",
        date: "2023",
        names: ["조국", "정혜진", "심푸름", "조우진", "차우철"],
      },
      {
        title: "네이버 하이퍼클로바",
        description: "디자인 프로젝트",
        image: "/cat_image.jpg",
        date: "2023",
        names: ["오준석", "장현수", "이우석", "석지민", "김영연"],
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row gap-4">
        <ProjectDescription title="섹시한 IT">
          <div className="flex">
            <div>
              <p className="mb-4">
                💡아는 것이 섹시하다 | 섹시하게 IT하자💡
                <br />
                매달 다양한 IT관련 주제를 가지고 카드뉴스를 만들어 정보를
                공유하는 활동이에요.
              </p>
              <div className="text-gray-400">
                INSTAGRAM
                <div>
                  <a
                    href="https://www.instagram.com/sexyit_season2/"
                    className="mr-4"
                  >
                    @sexyit_season2
                  </a>{" "}
                  <a href="https://www.instagram.com/sexyit2018/">
                    @sexyit2018
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" 
            sm:min-w-16 sm:min-h-16 md:min-w-32 md:min-h-64 lg:min-w-64 lg:min-h-64 ml-4"
            >
              <Image
                src="/cat_image.jpg"
                alt="섹시한 IT"
                width={256}
                height={256}
                className="bg-cover bg-center rounded-full flex-none order-0"
              />
            </div>
          </div>
        </ProjectDescription>
      </div>
      <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-4">
          {postsData.map((card, index) => (
            <PhotoWithTitleBox
              key={index}
              title={card.title}
              date={card.date}
              imageSrc={card.image}
              link={card.link}
            />
          ))}
        </div>
        <ActivityButton
          activity="더보기"
          selected={selectedActivity === "더보기"}
          onClick={() => alert("더보기")}
        />
      </section>
    </div>
  );
};

export default SectionSexyIt;
