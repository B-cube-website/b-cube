"use client";

import MobileActivityCard from "./MobileActivityCard";
import HomePdfViewer from "./HomePdfViewer";  // PDF 모달 컴포넌트 import
import { useEffect, useState } from "react";

// 활동 데이터 타입 정의
interface MobileActivity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

export default function MobileActivity() {
  const [isFetching, setIsFetching] = useState(false);
  const [activeCards, setActiveCards] = useState<MobileActivity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<{ pdfUrl: string; title: string } | null>(null);

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
  }, []);

  const handleOpenPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ pdfUrl, title });
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  if (error) {
    return <div className="text-red-500">데이터 불러오기 실패: {error}</div>;
  }

  return (
    <div>
      {isFetching ? (
        <div>로딩 중입니다...</div>
      ) : activeCards.length === 0 ? (
        <div>활동 데이터가 없습니다.</div>
      ) : (
        <MobileActivityCard
          activity={activeCards}
          isLoading={isFetching}
          onOpenPdf={handleOpenPdf}  // PDF 열기 핸들러 전달
        />
      )}
      {selectedPdf && (
        <HomePdfViewer
          pdfUrl={selectedPdf.pdfUrl}
          title={selectedPdf.title}
          onClose={handleClosePdf}  // PDF 닫기 핸들러
        />
      )}
    </div>
  );
}
