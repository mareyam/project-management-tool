import React from "react";
import { Flex, GridItem, Tag, Text, VStack } from "@chakra-ui/react";

type CardDetailsProps = {
  tags: string[];
  title: string;
  description: string;
};

const CardDetails = ({ tags, title, description }: CardDetailsProps) => {
  return (
    <GridItem rowSpan={1} colSpan={8}>
      <VStack w="full" alignItems="left">
        <Flex>
          {tags?.map((tagName: string) => (
            <Tag mr="2">{tagName}</Tag>
          ))}
        </Flex>
        <Text fontWeight="600">{title}</Text>
        <Text fontSize="12">{description}</Text>
      </VStack>
    </GridItem>
  );
};

export default CardDetails;
