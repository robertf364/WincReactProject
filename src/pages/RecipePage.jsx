import {
  Center,
  Button,
  Box,
  Flex,
  Image,
  Heading,
  Grid,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { RecipeHeader } from "../components/ui/RecipeHeader";
import { CardTags } from "../components/ui/CardTags";

const PageTags = ({ text, array, color }) => {
  return (
    <>
      {array.length > 0 && (
        <>
          <Text>{text}</Text>
          <CardTags array={array} color={color} />
        </>
      )}
    </>
  );
};

const NutrientLabel = ({ nutrient }) => {
  return (
    <>
      <Box>
        <Text>
          {Math.round(nutrient.quantity)} {nutrient.unit}
        </Text>
        <Text fontWeight={"bold"}>{nutrient.label.toUpperCase()}</Text>
      </Box>
    </>
  );
};

export const RecipePage = ({ recipe, clickFn }) => {
  // Convert nutrients object to array
  var nutrients = [];
  for (const [key, value] of Object.entries(recipe.totalNutrients)) {
    var data = value;
    data["id"] = key;
    nutrients.push(data);
  }

  return (
    <Center minH="100vh" flexDir="column" bg={"blue.300"}>
      <Box
        minWidth={300}
        maxWidth={1250}
        minHeight={"100vh"}
        bg={"blue.50"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={10}
      >
        <Grid paddingY={5} w="100%" templateColumns="repeat(3, 1fr)" gap={12}>
          <Button w={["auto", 150]} onClick={() => clickFn()}>
            {"<"} Back
          </Button>
          <Heading textAlign="center" gridColumnStart={2} gridColumnEnd={3}>
            Recipe App
          </Heading>
          <Box></Box>{" "}
          {/* This empty Box acts as a placeholder for the third column */}
        </Grid>
        <Box>
          <Image objectFit="cover" h={400} w="100%" src={recipe.image} />
          <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={12}>
            <Flex flexDir={"column"} padding={4} gap={4}>
              <RecipeHeader recipe={recipe} textAlign={"start"} />
              {recipe.dishType.length > 0 && (
                <Flex gap={1}>
                  <Text>Dish:</Text>
                  <Text>{recipe.dishType[0]}</Text>
                </Flex>
              )}
              <Text>Total cooking time: {recipe.totalTime} minutes</Text>
              <Text>Servings: {recipe.yield}</Text>
              {recipe.ingredientLines.length > 0 && (
                <Box>
                  <Text fontWeight={"bold"}>Ingredients:</Text>
                  {recipe.ingredientLines.map((ingredient) => {
                    return <Text key={ingredient}>{ingredient}</Text>;
                  })}
                </Box>
              )}
            </Flex>
            <Flex flexDir={"column"} padding={4} gap={4}>
              <PageTags
                text={"Health labels:"}
                array={recipe.healthLabels}
                color={"purple.200"}
              />
              <PageTags
                text={"Diet:"}
                array={recipe.dietLabels}
                color={"green.200"}
              />
              <PageTags
                text={"Cautions:"}
                array={recipe.cautions}
                color={"red.200"}
              />
              <Text fontWeight={"bold"}>Total nutrients:</Text>
              <Box display={"flex"} flexWrap={"wrap"} gap={6}>
                {nutrients.map((nutrient) => {
                  return (
                    [
                      "ENERC_KCAL",
                      "FAT",
                      "CHOCDF",
                      "PROCNT",
                      "CHOLE",
                      "NA",
                    ].includes(nutrient.id) && (
                      <NutrientLabel key={nutrient.id} nutrient={nutrient} />
                    )
                  );
                })}
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      <Spacer />
    </Center>
  );
};
