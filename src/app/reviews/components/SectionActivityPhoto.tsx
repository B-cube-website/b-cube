import React, { useEffect, useState } from "react";
import activityPhotoNextArrow from "../../../../public/activityPhotoNextArrow.svg";
import activityPhotoPrevArrow from "../../../../public/activityPhotoPrevArrow.svg";
import Image from "next/image";
import useStore from "@/stores/useStore";

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

        const data = await response.json();
        console.log(data);
        setImages(data); // 응답 데이터를 images 상태에 설정
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
          maxWidth: "80%",
          margin: "0 auto",
          overflow: "hidden",
          padding: "0 5px", // 양쪽 여백을 위해 padding 추가
          ...(isMobile
            ? {} // 모바일에서는 마스크 효과 제거
            : {
                maskImage:
                  "linear-gradient(to right, rgba(20, 67, 159, 0) 2%, rgba(20, 67, 159, 0.3) 8%, rgba(20, 67, 159, 0.8) 12%, #14439F 30%, #14439F 70%, rgba(20, 67, 159, 0.8) 88%, rgba(20, 67, 159, 0.3) 92%, rgba(20, 67, 159, 0) 98%)",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(20, 67, 159, 0) 2%, rgba(20, 67, 159, 0.3) 8%, rgba(20, 67, 159, 0.8) 12%, #14439F 30%, #14439F 70%, rgba(20, 67, 159, 0.8) 88%, rgba(20, 67, 159, 0.3) 92%, rgba(20, 67, 159, 0) 98%)",
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
              const blurAmount = `${Math.min(distanceFromCurrent * 2, 8)}px`;
              const opacityValue = 1 - Math.min(distanceFromCurrent * 0.2, 0.8);
              const scaleValue = 1 - Math.min(distanceFromCurrent * 0.05, 0.3);

              return (
                <div
                  key={index}
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
                  }}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: `blur(${blurAmount})`,
                      borderRadius: 7,
                    }}
                  />
                  <p>{image.description}</p>
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
          maxWidth: "80%",
          margin: "0 auto",
          maskImage:
            "linear-gradient(to right, rgba(20, 67, 159, 0) 2%, rgba(20, 67, 159, 0.3) 8%, rgba(20, 67, 159, 0.8) 12%, #14439F 30%, #14439F 70%, rgba(20, 67, 159, 0.8) 88%, rgba(20, 67, 159, 0.3) 92%, rgba(20, 67, 159, 0) 98%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(20, 67, 159, 0) 2%, rgba(20, 67, 159, 0.3) 8%, rgba(20, 67, 159, 0.8) 12%, #14439F 30%, #14439F 70%, rgba(20, 67, 159, 0.8) 88%, rgba(20, 67, 159, 0.3) 92%, rgba(20, 67, 159, 0) 98%)",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * (isMobile ? 78 : 98)}px)`,
            transition: "transform 0.8s ease",
            gap: isMobile ? "12px" : "18px",
            paddingLeft: "50%",
            width: "100%",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={image.alt}
              style={{
                width: isMobile ? "120px" : "150px",
                height: isMobile ? "64px" : "80px",
                objectFit: "contain",
                cursor: "pointer",
                transform:
                  currentIndex === index ? "scale(1.15)" : "scale(1.05)",
                opacity: currentIndex === index ? 1 : 0.6,
                transition: "transform 0.3s, opacity 0.3s",
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionActivityPhoto;
