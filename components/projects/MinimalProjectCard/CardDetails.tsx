import React from "react";
import { Flex, GridItem, Tag, Text, VStack } from "@chakra-ui/react";

type CardDetailsProps = {
  tags: string[];
  title: string;
  description: string;
  status: string;
};

const CardDetails = ({
  tags,
  title,
  description,
  status,
}: CardDetailsProps) => {
  return (
    <GridItem rowSpan={1} colSpan={8}>
      <VStack w="full" alignItems="left">
        <Flex>
          {tags?.map((tagName: string, index: number) => (
            <Tag key={index} mr="2">
              {tagName}
            </Tag>
          ))}
        </Flex>
        <Text fontWeight="600">{title}</Text>
        <Text fontSize="12">{description}</Text>
        <Text
          fontSize="14"
          fontWeight="600"
          color={
            status == "completed"
              ? "green"
              : status == "pending"
              ? "red"
              : "orange"
          }
        >
          {status}
        </Text>
      </VStack>
    </GridItem>
  );
};

export default CardDetails;
