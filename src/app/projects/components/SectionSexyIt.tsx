import React, { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Image from "next/image";
import PhotoWithTitleBox from "./postPreview/PhotoWithTitleBox";
import ActivityButton from "@/components/activityButton";
import fetchPosts from "@/functions/fetchPosts";
import MobileButton from "@/mobileComponents/mobileButton";
import useStore from "@/stores/useStore";

const SectionSexyIt = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("더보기");
  const [postsData, setPostsData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개만 표시
  const { isMobile } = useStore();

  useEffect(() => {
    fetchPosts("/api/activities/sexyit", setPostsData, setError, true);
  }, []);

  // "더보기" 버튼 클릭 시 6개의 포스트 추가로 표시
  const loadMorePosts = () => {
    const remainingPosts = postsData.length - visiblePosts;
    const postsToShow = Math.min(6, remainingPosts);
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsToShow);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full sm:max-w-[1280px] sm:mx-auto mx-auto px-6 overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full max-w-full sm:max-w-[1040px] sm:mt-[160px] mt-[64px] overflow-hidden">
        <ProjectDescription title="섹시한 IT">
          <div className="flex items-center align-middle">
            <div>
              <p className="mb-4">
                💡아는 것이 섹시하다, 섹시하게 IT하자💡
                <br />
                매달 다양한 IT관련 주제를 가지고 <br />
                카드뉴스를 만들어 정보를 공유하는 활동
              </p>
              <div className="text-[#7380B0]">
                INSTAGRAM
                <div>
                  <a
                    href="https://www.instagram.com/sexyit_season2/"
                    className="mr-[4px]"
                  >
                    @sexyit_season2
                  </a>{" "}
                  <a href="https://www.instagram.com/sexyit2018/">
                    @sexyit2018
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ProjectDescription>
        <Image
          src="/sexyit.jpg"
          alt="섹시한 IT"
          width={isMobile ? 90 : 250}
          height={isMobile ? 90 : 250}
          layout="fixed" // 이미지의 레이아웃을 고정 크기로 설정
          className="rounded-full object-cover" // 둥근 모서리와 꽉 채우기 설정
          style={{
            width: isMobile ? "90px" : "250px", // 너비 강제 설정
            height: isMobile ? "90px" : "250px", // 높이 강제 설정
            maxWidth: "100%", // 부모 요소보다 커지지 않도록 설정
          }}
        />
      </div>
      <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-4">
          {postsData
            .slice(0, Math.floor(visiblePosts / 3) * 3)
            .map((card, index) => (
              <PhotoWithTitleBox
                key={index}
                title={card.title}
                date={card.date}
                imageSrc={card.imageUrl}
                link={card.url}
              />
            ))}
          {visiblePosts % 3 === 1 && (
            <div className="hidden lg:block">
              <PhotoWithTitleBox key={"dummy"} />
            </div>
          )}
          {visiblePosts % 3 === 1 ? (
            <PhotoWithTitleBox
              key={postsData[visiblePosts - 1] + 1}
              title={postsData[visiblePosts - 1].title}
              date={postsData[visiblePosts - 1].date}
              imageSrc={postsData[visiblePosts - 1].imageUrl}
              link={postsData[visiblePosts - 1].url}
            />
          ) : (
            postsData
              .slice(
                Math.floor(visiblePosts / 3) * 3,
                Math.floor(visiblePosts / 3) * 3 + (visiblePosts % 3)
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
