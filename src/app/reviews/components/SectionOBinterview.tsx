"use client"; // 이 컴포넌트를 클라이언트에서만 렌더링

import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard"; // ProfileCard 컴포넌트를 가져옴

const SectionOBinterview = () => {
  const [postData, setPostData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts(); // 컴포넌트가 마운트될 때 데이터를 가져옴
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
        setPostData(data); // 데이터를 상태에 저장
        setError(null); // 에러가 없을 때 초기화
      })
      .catch((error) => {
        console.log("데이터를 불러오는데 실패했습니다:", error);
        setError("데이터를 불러오는데 실패했습니다.");
      });
  };

  return (
    <div className="section-ob-interview grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {error ? (
        <p>{error}</p> // 에러가 발생했을 때 에러 메시지 표시
      ) : postData.length > 0 ? (
        postData.map((post) => (
          <ProfileCard
            key={post.id} // 각 데이터의 고유 id 값
            name={post.name} // API로부터 받은 name
            studentId={post.studentId} // API로부터 받은 studentId
            message={post.message} // API로부터 받은 message
            imageUrl={post.imageUrl} // API로부터 받은 imageUrl
          />
        ))
      ) : (
        <p>로딩 중...</p> // 데이터를 불러오는 동안 표시
      )}
    </div>
  );
};

export default SectionOBinterview;
