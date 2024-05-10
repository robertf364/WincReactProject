import { Text, Heading } from "@chakra-ui/react";

export const RecipeHeader = ({ recipe, textAlign }) => {
  return (
    <>
      {recipe.mealType.map((type) => {
        return (
          <Text
            color={"gray.500"}
            fontWeight={"bold"}
            fontSize={"xs"}
            key={type}
          >
            {type.toUpperCase()}
          </Text>
        );
      })}
      <Heading textAlign={textAlign} size={"md"}>
        {recipe.label}
      </Heading>
    </>
  );
};
