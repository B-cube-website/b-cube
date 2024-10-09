import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MobileCarouselProps {
  children: React.ReactNode;
}

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-4 flex h-16 w-16 items-center justify-center rounded-full bg-white opacity-70 cursor-pointer z-20"
      onClick={onClick}
    >
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 flex h-16 w-16 items-center justify-center rounded-full bg-white opacity-70 cursor-pointer z-20"
      onClick={onClick}
    >
    </button>
  );
};

const MobileCarousel: React.FC<MobileCarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="w-screen mobile-carousel-wrapper">
      {React.Children.map(children, (child, index) => (
        <div key={index}>
          {child}
        </div>
      ))}
    </Slider>
  );
};

export default MobileCarousel;
