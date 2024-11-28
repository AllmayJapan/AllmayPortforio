import React from "react";
import styled, { keyframes } from "styled-components";

interface IconAnimationProps {
  children: React.ReactNode; // アイコンを受け取る
}

// 上下に動くアニメーション
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// ホバー時にY軸回転するアニメーション
const hoverAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

// スタイルコンテナ
const AnimatedContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    animation: ${floatAnimation} 3s ease-in-out infinite;
    transition: transform 0.5s ease-in-out;

    &:hover {
      animation: none; /* 上下アニメーションを停止 */
      animation: ${hoverAnimation} 0.5s ease-in-out;
    }
  }
`;

const IconAnimation: React.FC<IconAnimationProps> = ({ children }) => {
  return <AnimatedContainer>{children}</AnimatedContainer>;
};

export default IconAnimation;
