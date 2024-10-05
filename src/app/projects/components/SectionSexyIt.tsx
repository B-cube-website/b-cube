import React, { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Image from "next/image";
import PhotoWithTitleBox from "./postPreview/PhotoWithTitleBox";
import ActivityButton from "@/components/activityButton";
import fetchPosts from "@/functions/fetchPosts";

const SectionSexyIt = () => {
  const [selectedActivity, setSelectedActivity] =
    React.useState<string>("더보기");
  const [postsData, setPostsData] = React.useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개만 표시
  const [currentVisiblePosts, setCurrentVisiblePosts] = useState<number>(0);

  useEffect(() => {
    fetchPosts("/api/activities/sexyit", setPostsData, setError);
  }, []);

  // 더보기 버튼 클릭 시 6개의 포스트 추가로 표시
  const loadMorePosts = () => {
    const remainingPosts = postsData.length - visiblePosts;
    const postsToShow = Math.min(6, remainingPosts); 

    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsToShow);
    setCurrentVisiblePosts(postsToShow);
  };
  
  

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-screen-2xl mx-auto relative gap-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row gap-4">
        <ProjectDescription title="섹시한 IT">
          <div className="flex items-center align-middle">
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
                src="/sexyit.jpg"
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
          {postsData.slice(0, (Math.floor(visiblePosts / 3)) * 3).map((card, index) => (
            <PhotoWithTitleBox
              key={index}
              title={card.title}
              date={card.date}
              imageSrc={card.imageUrl}
              link={card.url}
            />
          ))}
          {visiblePosts % 3 === 1 && <PhotoWithTitleBox key={"dummy"} />}
          {visiblePosts % 3 === 1 ? (
            <PhotoWithTitleBox
              key={postsData[visiblePosts - 1] + 1}
              title={
                postsData[visiblePosts - 1].title
              }
              date={postsData[visiblePosts - 1].date}
              imageSrc={postsData[visiblePosts - 1].imageUrl}
              link={postsData[visiblePosts - 1].url}
            />
          ) : (
            postsData
              .slice(
                Math.floor(visiblePosts / 3) * 3,
                Math.floor(visiblePosts / 3) * 3 + visiblePosts % 3
              )
              .map((card, index) => (
                <PhotoWithTitleBox
                  key={index}
                  title={card.title}
                  date={card.date}
                  imageSrc={card.imageUrl}
                  link={card.url}
                />
              ))
          )}
        </div>
        {visiblePosts < postsData.length - 1 && (
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
