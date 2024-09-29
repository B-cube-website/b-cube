"use client";

import ActivityCard from './ActivityCard';
import { useEffect, useState } from "react";

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
        // 환경 변수를 사용하여 API URL 설정
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
        // 데이터가 없으면 빈 배열 반환
        setActiveCards(resData || []);
         

      } catch (err) {
        // 명확한 에러 메시지 처리
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

  if (isFetching) {
    return <div>로딩 중입니다...</div>;
  }

  if (activeCards.length === 0) {
    return <div>활동 데이터가 없습니다.</div>;
  }

  return (
    <div>
      <ActivityCard
        activity={activeCards}
        isLoading={isFetching}
        loadingText="로딩 중입니다..."
      />
    </div>
  );
}
