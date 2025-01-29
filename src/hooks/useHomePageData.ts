import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RecipeResponse } from "../types/recipeTypes";

const RECIPES_API = "https://dummyjson.com/recipes";

interface UseRecipesOptions {
  search?: string;
}

export const useRecipes = (options: UseRecipesOptions = {}) => {
  const { search = "" } = options;

  return useQuery<RecipeResponse, Error>({
    queryKey: ["recipes", { search }],
    queryFn: async () => {
      const endpoint = search
        ? `${RECIPES_API}/search?q=${search}`
        : `${RECIPES_API}`;

      const { data } = await axios.get(endpoint);
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
};
