import { Box, Image, Text, HStack, Spacer } from "@chakra-ui/react";
import { CardTags } from "./CardTags";
import { RecipeHeader } from "./RecipeHeader";

export const RecipeCard = ({ recipe, clickFn }) => {
  const healthLabels = recipe.healthLabels.filter((label) =>
    ["Vegetarian", "Vegan"].includes(label)
  );
  const cautions = recipe.cautions;
  const dietLabels = recipe.dietLabels;

  return (
    <Box
      w={275}
      h={400}
      borderRadius={20}
      bg={"blue.50"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      _hover={{ transform: "scale(1.01)" }}
      onClick={() => clickFn(recipe)}
      cursor="pointer"
    >
      <Image
        objectFit="cover"
        h={150}
        w="100%"
        borderTopRadius={20}
        src={recipe.image}
      />
      <RecipeHeader recipe={recipe} textAlign="center" />
      <CardTags array={healthLabels} color={"purple.200"} />
      <CardTags array={dietLabels} color={"green.200"} />
      {recipe.dishType.length > 0 && (
        <HStack>
          <Spacer />
          <Text>Dish:</Text>
          <Text fontWeight={"bold"}>{recipe.dishType[0]}</Text>
          <Spacer />
        </HStack>
      )}
      {cautions.length > 0 && (
        <>
          <Text>Cautions:</Text>
          <CardTags array={cautions} color={"red.200"} />
        </>
      )}
    </Box>
  );
};
