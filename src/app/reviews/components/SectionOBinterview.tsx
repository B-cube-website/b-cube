"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ActivityButton from "@/components/activityButton";

const SectionOBinterview = () => {
  const [postData, setPostData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6); // 초기값 6

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

  return (
    <div className="section-ob-interview px-4 sm:px-6 lg:px-8 mt-36 mb-32">
      {/* 프로필 카드를 담는 그리드 컨테이너 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {error ? (
          <p className="text-red-500">{error}</p> // 에러 메시지 표시
        ) : postData.length > 0 ? (
          postData
            .slice(0, visibleCount)
            .map((post) => (
              <ProfileCard
                key={post.id}
                name={post.name}
                studentId={post.studentId}
                message={post.message}
                imageUrl={post.imageUrl}
              />
            ))
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
