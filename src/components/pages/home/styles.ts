import styled from "styled-components";

const PageContainer = styled.div``;

const SearchContainer = styled.div`
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: 48px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  background: white;

  &:focus {
    outline: none;
    border-color: none;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
`;

const RecipeCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
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

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  text-align: center;
  padding: 20px;
  background: #fef2f2;
  border-radius: 8px;
  margin-bottom: 20px;
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

export {
  ErrorMessage,
  PageContainer,
  RecipeCard,
  RecipeGrid,
  RecipeHeader,
  RecipeImage,
  RecipeInfo,
  SearchContainer,
  SearchIcon,
  SearchInput,
};
