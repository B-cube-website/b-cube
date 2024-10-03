"use client";

import ActivityCard from './ActivityCard';
import { useEffect, useState } from "react";

// 활동 데이터 타입 정의
interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

export default function Activity() {
  const [isFetching, setIsFetching] = useState(false);
  const [activeCards, setActiveCards] = useState<Activity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      setIsFetching(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/main-activity`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const resData = await response.json();
        setActiveCards(resData || []);

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setIsFetching(false);
      }
    };

    fetchActivity();
  }, []); // useEffect는 빈 배열로, 처음 한 번만 실행되도록 설정

  if (error) {
    return <div className="text-red-500">데이터 불러오기 실패: {error}</div>;
  }

  // isFetching이 true일 때는 로딩 중, activity가 로드되었으나 비어있을 때는 "활동 데이터가 없습니다." 표시
  return (
    <div>
      {isFetching ? (
        <div>로딩 중입니다...</div>
      ) : activeCards.length === 0 ? (
        <div>활동 데이터가 없습니다.</div>
      ) : (
        <ActivityCard
          activity={activeCards}
          isLoading={isFetching}
          loadingText="로딩 중입니다..."
        />
      )}
    </div>
  );
}
