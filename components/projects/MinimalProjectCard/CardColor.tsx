import React from "react";
import { Box, GridItem } from "@chakra-ui/react";

type CardColorProps = {
  color: string;
};

const CardColor = ({ color }: CardColorProps) => {
  return (
    <GridItem display="flex" alignItems="flex-start" colSpan={1}>
      <Box rounded="full" h="100%" w="1" bg={color}></Box>
    </GridItem>
  );
};

export default CardColor;
