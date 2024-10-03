import {CSSProperties} from 'react';

const InfiniteLoopSlider : React.FC<InfiniteLoopPropType> = ({children, style, onHoverStop}) => {

  // 슬라이더에 마우스를 올렸을 때 이벤트
  const onMouseOverSlider = (e : React.MouseEvent) => {
    const slider = e.currentTarget;   	
    if (e.target === slider) return; // 슬라이더 자체가 아닌 슬라이더 안의 요소들에 마우스를 올렸을 때 멈추고 싶어 해당 코드를 넣었습니다.   

    if (!(slider instanceof HTMLDivElement)) return;
     slider.style.animationPlayState = 'paused';
  }

  // 마우스가 슬라이더에서 벗어났을 때 이벤트
  const onMouseOutSlider = (e : React.MouseEvent) => {
     const slider = e.currentTarget;

    if (!(slider instanceof HTMLDivElement))  return;
    slider.style.animationPlayState = 'running';
  }


  return (
    <div className='InfiniteLoop__slider' >
      <div 
        className={`InfiniteLoop__inner`} 
        style={style} 
        onMouseOver={onHoverStop ? onMouseOverSlider : undefined} 
        onMouseOut={onHoverStop ? onMouseOutSlider : undefined}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

// TYPE
export interface InfiniteLoopPropType{
  children: React.ReactNode;
  onHoverStop?: boolean;
  style?: CSSProperties; // 기본으로 설정한 스타일 덮어씌우고 싶을 경우
}

export default InfiniteLoopSlider;