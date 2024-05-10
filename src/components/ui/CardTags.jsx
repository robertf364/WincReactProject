import { Tag, Flex } from "@chakra-ui/react";

export const CardTags = ({ array, color }) => {
  return (
    <Flex gap={2} flexWrap={"wrap"}>
      {array.map((tag) => {
        return (
          <Tag key={tag} bg={color}>
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};
