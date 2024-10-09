import React, { CSSProperties, useState } from 'react';

interface InfiniteLoopSliderProps {
  children: React.ReactNode;
  onHoverStop?: boolean;
  style?: CSSProperties; // 기본으로 설정한 스타일 덮어씌우고 싶을 경우
  className?: string; // 추가된 className prop
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, style, onHoverStop, className = '' }) => {
  const [hoverCardIndex, setHoverCardIndex] = useState<number | null>(null);

  // 슬라이더에 마우스를 올렸을 때 이벤트
  const onMouseOverSlider = (e: React.MouseEvent) => {
    const slider = e.currentTarget;
    if (e.target === slider) return; // 슬라이더 자체가 아닌 슬라이더 안의 요소들에 마우스를 올렸을 때 멈추고 싶어 해당 코드를 넣었습니다.

    if (!(slider instanceof HTMLDivElement)) return;
    slider.style.animationPlayState = 'paused';
  };

  // 마우스가 슬라이더에서 벗어났을 때 이벤트
  const onMouseOutSlider = (e: React.MouseEvent) => {
    const slider = e.currentTarget;
    setHoverCardIndex(null);

    if (!(slider instanceof HTMLDivElement)) return;
    slider.style.animationPlayState = 'running';
  };

  // 카드에 마우스를 올렸을 때 이벤트
  const onMouseOverCard = (index: number) => {
    setHoverCardIndex(index);
  };

  // 카드에서 마우스가 벗어났을 때 이벤트
  const onMouseOutCard = () => {
    setHoverCardIndex(null);
  };

  return (
    <div className={`InfiniteLoop__slider ${className}`}>
      <div
        className='InfiniteLoop__inner'
        style={style}
        onMouseOver={onHoverStop ? onMouseOverSlider : undefined}
        onMouseOut={onHoverStop ? onMouseOutSlider : undefined}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={`InfiniteLoop__item ${hoverCardIndex === index ? 'InfiniteLoop_hoverItem' : ''}`}
            onMouseOver={() => onMouseOverCard(index)}
            onMouseOut={onMouseOutCard}
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: hoverCardIndex === index ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {child}
          </div>
        ))}
        {React.Children.map(children, (child, index) => (
          <div
            className={`InfiniteLoop__item ${hoverCardIndex === index ? 'InfiniteLoop_hoverItem' : ''}`}
            onMouseOver={() => onMouseOverCard(index)}
            onMouseOut={onMouseOutCard}
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: hoverCardIndex === index ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLoopSlider;