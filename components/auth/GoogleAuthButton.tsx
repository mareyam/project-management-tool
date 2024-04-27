import { Button } from "@chakra-ui/react";
import React from "react";

type GoogleAuthButtonProps = {
  title: string;
};

const GoogleAuthButton = ({title}: GoogleAuthButtonProps) => {
  return (
    <Button
      h="8"
      fontSize="12"
      fontWeight="400"
      w="xs"
      bg="white"
      border="1px solid gray"
    >
      {title}
    </Button>
  );
};

export default GoogleAuthButton;
