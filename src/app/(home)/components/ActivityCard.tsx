import { useState } from "react";
import InfiniteLoopSlider from "./InfiniteLoopSlider";
import './Slider.css';

interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

interface ActivityCardProps {
  isLoading: boolean;
  loadingText?: string;
  activity: Activity[];
  onOpenPdf: (pdfUrl: string, title: string) => void;  // PDF 열기 핸들러 추가
  className?: string;
}

export default function ActivityCard({
  isLoading,
  loadingText = "로딩 중...",
  activity,
  onOpenPdf,
  className = "",
}: ActivityCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (activity.length === 0) {
    return <p>활동 데이터가 없습니다.</p>;
  }

  return (
    <section className='activity-card-wrapper'>
      <div>
        <InfiniteLoopSlider onHoverStop={true}>
          {activity.map((item) => (
            <div key={item.id} className="InfiniteLoop__item" onClick={() => onOpenPdf(item.pdfPath, item.title)}>
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
