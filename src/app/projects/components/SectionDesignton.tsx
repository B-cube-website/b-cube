import React, { useEffect, useState } from "react";
import PostPreviewSection from "./postPreview/PostPreviewSection";
import PostPreviewSectionWithPdf from "./postPreview/PostPreviewSectionWithPdf";
import fetchPosts from "@/functions/fetchPosts";

// interface PostData {
//   // Define the structure of your post data here
//   id: number;
//   year: number;
//   title: string;
//   participants: string;
//   imageUrl: string;
//   pdfUrl: string;
// }

const SectionDesignton = () => {
  const [postsData, setPostsData] = React.useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts("/api/activities/designton", setPostsData, setError, false);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full sm:max-w-[1280px] sm:mx-auto mx-auto overflow-hidden sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between items-center w-full max-w-full sm:max-w-[1040px] sm:mt-[160px] mt-[64px] overflow-hidden px-6">
      <PostPreviewSection
        title="디자인톤"
        desc="팀 별로 아이디어를 기획하고 구체화하여 앱 서비스를 기획하는 활동"
        postsData={postsData}
        setPostsData={setPostsData}
      />
      </div>
    </div>
  );
};

export default SectionDesignton;
