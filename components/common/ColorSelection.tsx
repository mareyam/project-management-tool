import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import { useProjectStore } from "@/zustand-store/project";

const COLOR = ["red.200", "pink.500", "blue.300", "orange.200"];

type ColorSelectionProps = {
  selectedColor: number;
};
const ColorSelection = ({ selectedColor }: ColorSelectionProps) => {
  const { setSelectedColor } = useProjectStore();

  return (
    <HStack>
      {COLOR.map((color, index) => (
        <Box
          cursor="pointer"
          key={color}
          boxSize="8"
          bg={color}
          rounded="full"
          onClick={() => setSelectedColor(index)}
          outline={selectedColor == index ? "2px solid gray" : "none"}
        />
      ))}
    </HStack>
  );
};

export default ColorSelection;
