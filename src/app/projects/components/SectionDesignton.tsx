import React, { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import PostPreviewBox from "./postPreview/PostPreviewBox";
import PostPreviewSection from "./postPreview/PostPreviewSection";

const SectionDesignton = () => {
  const [postsData, setPostsData] = React.useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6); // 초기값 6

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/activities/designton`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setPostsData(data);
        console.log(data);
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
    <PostPreviewSection title="디자인톤" desc="팀 별로 아이디어를 기획하고 구체화하여 앱 서비스를 기획하는 활동" postsData={postsData} setPostsData={setPostsData} />
    );
};

export default SectionDesignton;
