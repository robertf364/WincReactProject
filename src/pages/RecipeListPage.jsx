import { Center, Heading, Flex, Button, Input, Spacer } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setFilter] = useState();

  // You can play around with the console log, but ultimately remove it once you are done
  const recipes = data.hits.map((hit) => hit.recipe);

  const updateSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterRecipe = (recipe, value, filter) => {
    const isInName = recipe.label.toLowerCase().includes(value.toLowerCase());
    const isInFilters = !filter || recipe.healthLabels.includes(filter);
    return isInName && isInFilters;
  };

  const matches = recipes.filter((recipe) => {
    return filterRecipe(recipe, searchTerm, activeFilter);
  });
  const filters = ["Vegetarian", "Vegan", "Pescatarian"];

  return (
    <Center minHeight={"100vh"} flexDir="column" bg={"blue.300"} gap={6}>
      <Heading paddingTop={5}>Recipe App</Heading>
      <Flex flexDir={"column"} minW={275} w={["80vw", 500]} gap={2}>
        <Input
          type="text"
          onChange={updateSearch}
          variant="filled"
          placeholder="Search recipes"
        />
        <Flex gap={2}>
          {filters.map((filter) => {
            return (
              <Button
                onClick={() =>
                  setFilter(activeFilter == filter ? undefined : filter)
                }
                _hover={{ fontWeight: "bold" }}
                key={filter}
                fontWeight={activeFilter == filter ? "bold" : "normal"}
                border={activeFilter == filter ? "2px" : "0px"}
              >
                {filter}
              </Button>
            );
          })}
        </Flex>
      </Flex>
      <Flex gap={6} flexWrap={"wrap"} justifyContent={"center"} maxWidth={1200}>
        {matches.map((recipe) => {
          return (
            <RecipeCard clickFn={clickFn} key={recipe.label} recipe={recipe} />
          );
        })}
      </Flex>
      <Spacer />
    </Center>
  );
};
