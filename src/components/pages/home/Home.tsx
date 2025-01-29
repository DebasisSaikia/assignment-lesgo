import React, { useState } from "react";
import { useRecipes } from "../../../hooks/useHomePageData";
import { Search } from "lucide-react";
import useDebounce from "../../../hooks/useDebounce";
import NoResult from "../../NoResult";
import {
  ErrorMessage,
  PageContainer,
  RecipeGrid,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";
import Card from "../../Card";
import SkeletonLoader from "../../Skeleton";

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 500);
  const { data, isLoading, error } = useRecipes({ search: debouncedSearch });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <PageContainer>
      <SearchContainer>
        <SearchIcon>
          <Search size={20} />
        </SearchIcon>
        <SearchInput
          type="search"
          placeholder="Search recipes..."
          onChange={handleSearchChange}
          value={searchInput}
        />
      </SearchContainer>

      {error && <ErrorMessage>Error: {error.message}</ErrorMessage>}

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          {data?.recipes.length === 0 ? (
            <NoResult />
          ) : (
            <RecipeGrid>
              {data?.recipes.map((recipe) => (
                <Card key={recipe?.name} recipe={recipe} />
              ))}
            </RecipeGrid>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Home;
