import MobileCarousel from "./MobileSlider";  // 모바일 캐러셀 컴포넌트
import './MobileCarousel.css';

interface MobileActivity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

interface MobileActivityCardProps {
  isLoading: boolean;
  loadingText?: string;
  activity: MobileActivity[];
  onOpenPdf: (pdfUrl: string, title: string) => void;  // PDF 열기 핸들러
  className?: string;
}

export default function MobileActivityCard({
  isLoading,
  loadingText = "로딩 중...",
  activity,
  onOpenPdf,
  className = "",
}: MobileActivityCardProps) {
  if (isLoading) {
    return <p>{loadingText}</p>;
  }

  if (activity.length === 0) {
    return <p>활동 데이터가 없습니다.</p>;
  }

  return (
    <section className='mobile-carousel-wrapper'>
      <MobileCarousel>
        {activity.map((item) => (
          <div
            className="mobile-carousel-item"
            key={item.id}
            onClick={() => onOpenPdf(item.pdfPath, item.title)} // 클릭 시 PDF 열기
          >
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
