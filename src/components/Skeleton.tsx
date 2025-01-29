import React from "react";
import { RecipeGrid } from "./pages/home/styles";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonPulse = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

const SkeletonCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkeletonImage = styled(SkeletonPulse)`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const SkeletonTitle = styled(SkeletonPulse)`
  height: 24px;
  width: 70%;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const SkeletonText = styled(SkeletonPulse)<{ width?: string }>`
  height: 16px;
  width: ${(props) => props.width || "100%"};
  border-radius: 4px;
  margin-bottom: 8px;
`;

const SkeletonLoader: React.FC = () => {
  return (
    <RecipeGrid>
      {[...Array(8)].map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonImage />
          <SkeletonTitle />
          <SkeletonText width="60%" />
          <SkeletonText width="40%" />
          <SkeletonText width="50%" />
        </SkeletonCard>
      ))}
    </RecipeGrid>
  );
};

export default SkeletonLoader;
