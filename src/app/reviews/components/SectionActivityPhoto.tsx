import React, { useEffect, useState } from "react";
import activityPhotoNextArrow from "../../../../public/activityPhotoNextArrow.svg";
import activityPhotoPrevArrow from "../../../../public/activityPhotoPrevArrow.svg";
import Image from "next/image";
import useStore from "@/stores/useStore";
import { reverse } from "dns";

interface ImageItem {
  date: string;
  description: string;
  id: number;
  imageUrl: string;
}

const SectionActivityPhoto = () => {
  const [images, setImages] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useStore();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/api/activity-photos`
        );
  
        if (!response.ok) {
          throw new Error("이미지 데이터를 불러오는데 실패했습니다.");
        }
  
        const data: ImageItem[] = await response.json(); // data 타입 지정
        let sortedData: ImageItem[] = [];
  
        data.forEach((item: ImageItem) => { // item 타입 지정
          sortedData.unshift(item);
        });
  
        console.log(sortedData);
        setImages(sortedData);
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };
  
    fetchImages();
  }, []);
  

  // 다음 이미지로 넘어가는 함수
  const nextImage = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  // 이전 이미지로 돌아가는 함수
  const prevImage = () => {
    if (images.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div
      style={{
        position: "relative",
        paddingTop: isMobile ? "40px" : "60px",
        color: "white",
        marginTop: "60px",
        height: isMobile ? "490px" : "700px", // 모바일에서 높이 조정
        marginBottom: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "center",
          // maxWidth: "80%",
          // margin: "0 auto",
          overflow: "hidden",
          ...(isMobile
            ? {} // 모바일에서는 마스크 효과 제거
            : {
                // maskImage:
                //   "linear-gradient(to right, rgba(20, 67, 159, 0) 0%, rgba(20, 67, 159, 0.3) 4%, rgba(20, 67, 159, 0.8) 12%, #14439F 20%, #14439F 80%, rgba(20, 67, 159, 0.8) 88%, rgba(20, 67, 159, 0.3) 96%, rgba(20, 67, 159, 0) 100%)",
                // WebkitMaskImage:
                //   "linear-gradient(to right, rgba(20, 67, 159, 0) 2%, rgba(20, 67, 159, 0.3) 4%, rgba(20, 67, 159, 0.8) 12%, #14439F 20%, #14439F 80%, rgba(20, 67, 159, 0.8) 88%, rgba(20, 67, 159, 0.3) 96%, rgba(20, 67, 159, 0) 100%)",
              }),
        }}
      >
        <div
          onClick={() => prevImage()}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "35px" : "50px", // 모바일에서 너비 조정
            height: "100%",
            marginRight: "-55px",
            marginBottom: "40px",
            zIndex: 1,
          }}
        >
          <Image
            src={activityPhotoPrevArrow}
            alt="prevArrow"
            style={{
              filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.6))",
              opacity: 0.9,
              marginLeft: isMobile ? "48px" : "0",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: isMobile ? "330px" : "530px",
            height: isMobile ? "300px" : "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              transform: `translateX(-${
                currentIndex * (isMobile ? 300 : 482)
              }px)`,
              transition: "transform 0.9s ease",
            }}
          >
            {images.map((image, index) => {
              const distanceFromCurrent = Math.abs(currentIndex - index);
              const opacityValue = 1 - Math.min(distanceFromCurrent * 0.4, 0.8);
              const scaleValue = 1 - Math.min(distanceFromCurrent * 0.05, 0.3);

              return (
                <div key={index}>
                  <div
                    style={{
                      flexShrink: 0,
                      width:
                        currentIndex === index
                          ? isMobile
                            ? "330px"
                            : "530px"
                          : isMobile
                          ? "280px"
                          : "450px",
                      height:
                        currentIndex === index
                          ? isMobile
                            ? "250px"
                            : "353px"
                          : isMobile
                          ? "220px"
                          : "320px",
                      opacity: opacityValue,
                      marginRight: isMobile ? "20px" : "32px",
                      transition: "all 0.5s ease",
                      transform:
                        currentIndex === index
                          ? "scale(1)"
                          : `scale(${scaleValue})`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "20px",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                        src={image.imageUrl}
                        layout="fill" // 부모 요소를 꽉 채우도록 설정
                        objectFit="cover" // 영역을 모두 채우기 위해 cover 사용
                        objectPosition="center" // 이미지를 중앙에 맞춤
                        alt={image.alt}
                      />
                    
                  </div>
                  <p className="text-center mr-[32px] mt-4">{image.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => nextImage()}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "35px" : "50px",
            height: "100%",
            marginLeft: "-55px",
            marginBottom: "40px",
            zIndex: 1,
          }}
        >
          <Image
            src={activityPhotoNextArrow}
            alt="nextArrow"
            style={{
              filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.6))",
              opacity: 0.9,
              marginRight: isMobile ? "48px" : "0",
            }}
          />
        </div>
      </div>
      <div style={{ height: isMobile ? 50 : 80 }}></div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
          padding: "15px 0",
          }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(calc(50% - ${(isMobile ? 45 : 60)}px - ${currentIndex * (isMobile ? 102 : 136)}px))`,
            transition: "transform 0.6s ease",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                marginRight: isMobile ? "12px" : "16px",
                width: isMobile ? "90px" : "120px",
                height: isMobile ? "64px" : "80px",
                position: "relative",
                cursor: "pointer",
                transform: currentIndex === index ? "scale(1.15)" : "scale(1.0)",
                opacity: currentIndex === index ? 1 : 0.6,
                transition: "transform 0.3s, opacity 0.3s",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.imageUrl}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionActivityPhoto;
