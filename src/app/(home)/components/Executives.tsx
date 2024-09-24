"use client";

import ExecutivesProfile from "./ExecutivesProfile";
import { useState, useEffect } from "react";

interface Executive {
  id: number;
  memberName: string;
  role: string;
  studentId: string;
  basicInfo: string;
  imageUrl: string;
}

export default function Executives() {
  const [isFetching, setIsFetching] = useState(false);
  const [profiles, setProfiles] = useState<Executive[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      setIsFetching(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/executives`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const resData = await response.json();
        setProfiles(resData || []); // API가 빈 데이터를 반환할 경우 대비

      } catch (err) {
        // Error 객체 타입을 명확히 처리
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setIsFetching(false);
      }
    };

    fetchProfiles();
  }, []);

  // 로딩 중 처리
  if (isFetching) {
    return <div>로딩 중입니다...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>데이터 불러오기 실패: {error}</div>;
  }

  if (profiles.length === 0) {
    return <div>회장단 데이터가 없습니다.</div>;
  }

  // 데이터가 있을 때 렌더링
  return (
    <ExecutivesProfile
      profile={profiles}
      isLoading={isFetching}
      loadingText="로딩 중입니다..."
    />
  );
}
