"use client";

import React, { useState } from "react";
import styled from "styled-components";

export default function Cube() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [initialRotation, setInitialRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientY - top) / height) * 90 - 60; // Y축 중심으로 회전
    const y = ((clientX - left) / width) * 120 - 60; // X축 중심으로 회전

    setRotation({
      x: initialRotation.x + x,
      y: initialRotation.y + y,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setInitialRotation(rotation); // 호버 시 현재 회전 상태 저장
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledWrapper>
      <div
        className="cube-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isHovered ? "none" : "transform 0.8s ease-out",
            animation: isHovered ? "none" : "spinner-y0fdc1 2s infinite ease",
          }}
        >
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .cube-container {
    width: 250px;
    height: 250px;
    perspective: 1000px;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spinner-y0fdc1 4s infinite ease !important; /* 레퍼런스에서 가져온 애니메이션 */
  }

  .face {
    position: absolute;
    width: 250px;
    height: 250px;
    background: transparent;
    border: 3px solid;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    text-align: center;
    line-height: 250px;
  }

  .front {
    transform: translateZ(125px);
    border-image: linear-gradient(to right, #003e7e, #003e7e) 1;
    box-shadow: 0 0 100px rgba(0, 62, 126, 0.8);
  }

  .back {
    transform: rotateY(180deg) translateZ(125px);
    border-image: linear-gradient(to right, #003e7e, #003e7e) 1;
    box-shadow: 0 0 100px rgba(0, 62, 126, 0.8);
  }

  .right {
    transform: rotateY(90deg) translateZ(125px);
    border-image: linear-gradient(to right, #003e7e, #003e7e) 1;
    box-shadow: 0 0 100px rgba(0, 62, 126, 0.8);
  }

  .left {
    transform: rotateY(-90deg) translateZ(125px);
    border-image: linear-gradient(to right, #003e7e, #003e7e) 1;
    box-shadow: 0 0 100px rgba(0, 62, 126, 0.8);
  }

  .top {
    transform: rotateX(90deg) translateZ(125px);
    border-image: linear-gradient(to right, #008f36, #008f36) 1;
    box-shadow: 0 0 100px rgba(0, 143, 54, 0.8);
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(125px);
    border-image: linear-gradient(to right, #e4002b, #e4002b) 1;
    box-shadow: 0 0 100px rgba(228, 0, 43, 0.8);
  }

  .cube-container:hover .cube {
    animation-play-state: paused;
  }

  @keyframes spinner-y0fdc1 {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
`;
