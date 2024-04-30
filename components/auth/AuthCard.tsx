import { GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AuthCard = () => {
  return (
    <GridItem w="lg" bg="#2B6CB0" colSpan={2} p="4">
      <VStack
        h="full"
        justifyContent="space-between"
        alignItems="left"
        color="white"
      >
        <Heading>Tool</Heading>
        <VStack alignItems="left">
          <Heading>Start making your dreams come true</Heading>
          <Text>
            Create an account and discover the worlds best UI component
            framework.
          </Text>
          <Text>Join 10.000+ users</Text>
        </VStack>
        <Text>© 2022 Chakra UI. All rights reserved.</Text>
      </VStack>
    </GridItem>
  );
};

export default AuthCard;
