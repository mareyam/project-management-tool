import { Button } from "@chakra-ui/react";
import React from "react";

//define type of AuthButton
const AuthButton = ({ handleAction }: any) => {
  return (
    <Button
      h="8"
      fontSize="12"
      fontWeight="400"
      w="xs"
      colorScheme="blue"
      onClick={handleAction}
    >
      Sign in
    </Button>
  );
};

export default AuthButton;
