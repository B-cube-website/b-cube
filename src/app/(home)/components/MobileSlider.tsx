import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../../../../public/nextArrow.svg";
import prevArrow from "../../../../public/prevArrow.svg";

interface MobileCarouselProps {
  children: React.ReactNode;
}

const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Image src={prevArrow} alt='prevArrow' className="absolute left-4 top-1/2 transform -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full cursor-pointer z-20"
      onClick={onClick}/>
    );
  };
  
  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Image src={nextArrow} alt='nextArrow' className="absolute right-4 top-1/2 transform -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full cursor-pointer z-20"
      onClick={onClick}/>
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
