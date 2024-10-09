import { useState } from "react";
import MobileCarousel from "./MobileSlider";  // 컴포넌트 import
import './MobileCarousel.css'; // 모바일 캐러셀 스타일 import

// 활동 데이터 타입 정의
interface MobileActivity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

// `ActivityCard` 컴포넌트의 Props 타입 정의
interface MobileActivityCardProps {
  isLoading: boolean;
  loadingText?: string;
  activity: MobileActivity[];
  className?: string;  // className prop 추가
}

export default function MobileActivityCard({
  isLoading,
  loadingText = "로딩 중...",
  activity,
  className = "",
}: MobileActivityCardProps) {
  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (activity.length === 0) {
    return <p>활동 데이터가 없습니다.</p>;
  }

  return (
    <section className={`mobile-carousel-wrapper ${className}`}>
      <MobileCarousel>
        {activity.map((item) => (
          <div className="mobile-carousel-item" key={item.id}>
            <img
              src={item.imagePath}
              alt={item.title}
              className="mobile__item-img"
            />
            <p className="mobile-description-overlay">
              {item.description} <br />
              {item.title}
            </p>
          </div>
        ))}
      </MobileCarousel>
    </section>
  );
}
