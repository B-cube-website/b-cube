import React, { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Image from "next/image";
import PhotoWithTitleBox from "./postPreview/Card";
import ActivityButton from "@/components/activityButton";
import fetchPosts from "@/functions/fetchPosts";

const SectionSexyIt = () => {
  const [selectedActivity, setSelectedActivity] = React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개만 표시

  useEffect(() => {
    fetchPosts("/api/activities/sexyit", setPostsData, setError);
  }, []);

  // 더보기 버튼 클릭 시 6개의 포스트 추가로 표시
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

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
          {postsData.slice(0, visiblePosts).map((card, index) => (
            <PhotoWithTitleBox
              key={index}
              title={card.title}
              date={card.date}
              imageSrc={card.imageUrl}
              link={card.url}
            />
          ))}
        </div>
        {visiblePosts < postsData.length && (
          <ActivityButton
            activity="더보기"
            selected={selectedActivity === "더보기"}
            onClick={loadMorePosts}
          />
        )}
      </section>
    </div>
  );
};

export default SectionSexyIt;
