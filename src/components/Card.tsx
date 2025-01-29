import React, { useState } from "react";
import styled from "styled-components";
import { Recipe } from "../types/recipeTypes";

const RecipeCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const RecipeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #1a1a1a;
  }

  p {
    margin: 0;
    padding: 4px 8px;
    background: #f0fdf4;
    color: #166534;
    border-radius: 4px;
    font-weight: 500;
  }
`;

const RecipeInfo = styled.p`
  margin: 4px 0;
  color: #4b5563;
  font-size: 0.875rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  overflow: hidden;
  background: #f3f4f6;
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  color: #9ca3af;
`;

interface RecipeCard {
  recipe: Recipe;
}

interface LazyImageProps {
  src: string;
  alt: string;
}

//lazy image loading when image is loading slow from api
const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <ImageContainer>
      {!isLoaded && <ImagePlaceholder>Loading...</ImagePlaceholder>}
      {error ? (
        <ImagePlaceholder>Failed to load image</ImagePlaceholder>
      ) : (
        <RecipeImage
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </ImageContainer>
  );
};

const Card: React.FC<RecipeCard> = ({ recipe }: RecipeCard) => {
  return (
    <RecipeCard>
      <LazyImage src={recipe.image} alt={recipe.name} />
      <RecipeHeader>
        <h3>{recipe.name}</h3>
        <p>{recipe.rating}/5 </p>
      </RecipeHeader>
      <RecipeInfo>Cuisine: {recipe.cuisine}</RecipeInfo>
      <RecipeInfo>Difficulty: {recipe.difficulty}</RecipeInfo>
      <RecipeInfo>Calories: {recipe.caloriesPerServing} per serving</RecipeInfo>
    </RecipeCard>
  );
};

export default Card;
