import { useState } from "react";
import InfiniteLoopSlider from "./InfiniteLoopSlider";  // 컴포넌트 import
import './Slider.css';

// 활동 데이터 타입 정의
interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

// `ActivityCard` 컴포넌트의 Props 타입 정의
interface ActivityCardProps {
  isLoading: boolean;
  loadingText?: string;
  activity: Activity[];
}

export default function ActivityCard({
  isLoading,
  loadingText = "로딩 중...",
  activity,
}: ActivityCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (activity.length === 0) {
    return <p>활동 데이터가 없습니다.</p>;
  }

  return (
    <section className="activity-card-wrapper">
      <div className="InfiniteLoop__slider">
        <InfiniteLoopSlider onHoverStop={true}>
          {activity.map((item) => (
            <div key={item.id} className="InfiniteLoop__item">
              <img
                src={item.imagePath}
                alt={item.title}
                className="InfiniteLoop__item-img"
              />
              <p className="description-overlay">
                {item.description} <br />
                {item.title}
              </p>
            </div>
          ))}
        </InfiniteLoopSlider>
      </div>
    </section>
  );
}
