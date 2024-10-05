import React, { useEffect, useState } from "react";
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
    fetchPosts("/api/activities/designton", setPostsData, setError);
  }, []);

  return (
    <PostPreviewSectionWithPdf
      title="디자인톤"
      desc="팀 별로 아이디어를 기획하고 구체화하여 앱 서비스를 기획하는 활동"
      postsData={postsData}
      setPostsData={setPostsData}
    />
  );
};

export default SectionDesignton;
