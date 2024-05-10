import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Use state for selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState();

  return selectedRecipe ? (
    <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
  ) : (
    <RecipeListPage clickFn={setSelectedRecipe} />
  );
};
