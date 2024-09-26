"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ActivityButton from "@/components/activityButton";
import useStore from "@/stores/useStore"; // Zustand 스토어를 가져오는 경로

const SectionOBinterview = () => {
  const [postData, setPostData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6); // 초기값 6
  const { isMobile } = useStore(); // Zustand에서 isMobile 상태 가져오기

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/ob-interviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setPostData(data);
        setError(null);
      })
      .catch((error) => {
        console.log("데이터를 불러오는데 실패했습니다:", error);
        setError("데이터를 불러오는데 실패했습니다.");
      });
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  // 총 데이터가 3의 배수 + 1인지 확인
  const isLastCardCentered =
    postData.length % 3 === 1 && postData.length <= visibleCount;

  return (
    <div className="section-ob-interview flex flex-col justify-center items-center mt-36 mb-32">
      {/* 그리드 컨테이너 */}
      <div
        className="grid-container grid w-full"
        style={{
          gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)", // 모바일에서는 한 줄에 1개, 웹에서는 3개
          gap: isMobile ? "25px" : "20px", // 모바일에서는 25px, 웹에서는 20px
          maxWidth: isMobile ? "87vw" : "1200px", // 모바일에서는 너비 87vw
          width: "100%",
          padding: isMobile ? "0" : "0 120px", // 모바일에서는 패딩 제거
          justifyContent: "center", // 그리드 아이템을 중앙에 정렬
        }}
      >
        {error ? (
          <p className="text-red-500">{error}</p> // 에러 메시지 표시
        ) : postData.length > 0 ? (
          postData.slice(0, visibleCount).map((post, index) => {
            // 마지막 카드가 3의 배수 + 1일 때 가운데 정렬
            const isLastCard =
              isLastCardCentered &&
              index === postData.slice(0, visibleCount).length - 1;

            return (
              <div
                key={post.id}
                className={`${
                  isLastCard && !isMobile
                    ? "md:col-span-3 flex justify-center"
                    : ""
                }`}
                style={{
                  width: isMobile ? "87vw" : "auto", // 모바일에서는 카드 너비 87vw
                  height: isMobile ? "calc(87vw * 1.23)" : "auto", // 모바일에서는 높이 너비의 1.23배
                  display: "flex", // 프로필 카드 가운데 정렬
                  justifyContent: "center",
                }}
              >
                <ProfileCard
                  name={post.name}
                  studentId={post.studentId}
                  message={post.message}
                  imageUrl={post.imageUrl}
                  email={post.email}
                  // 모바일일 때의 카드 내부 스타일 조정
                  style={
                    isMobile ? { fontSize: "clamp(0.8rem, 2vw, 1rem)" } : {}
                  }
                />
              </div>
            );
          })
        ) : (
          <p>로딩 중...</p>
        )}
      </div>

      {/* "더보기" 버튼을 프로필 카드 아래에 배치 */}
      {visibleCount < postData.length && (
        <section className="flex justify-center items-center w-full mt-24 mb-32">
          <ActivityButton
            activity="더보기"
            selected={true}
            onClick={handleLoadMore}
          />
        </section>
      )}
    </div>
  );
};

export default SectionOBinterview;
