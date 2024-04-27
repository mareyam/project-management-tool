import React from "react";
import Link from "next/link";
import { HStack, IconButton, Text } from "@chakra-ui/react";

const SidebarMenuItem = ({
  title,
  icon,
  size,
  isSelected,
  handleMenuClick,
  linkTo,
}: any) => {
  return (
    <Link href={linkTo}>
      <HStack
        w="full"
        bg={isSelected ? "gray.100" : "none"}
        roundedRight={isSelected ? "full" : "none"}
        borderLeft={isSelected ? "6px solid gray" : "none"}
        _hover={{
          roundedRight: "full",
          bg: "gray.100",
          borderLeft: "6px solid gray",
        }}
        px="4"
        onClick={() => handleMenuClick(title)}
      >
        <IconButton
          aria-label="logo"
          variant="unstyled"
          display="flex"
          icon={React.cloneElement(icon, { size })}
          rounded="full"
        />
        <Text>{title}</Text>
      </HStack>
    </Link>
  );
};

export default SidebarMenuItem;
