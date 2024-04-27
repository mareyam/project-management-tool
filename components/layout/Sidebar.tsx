import React, { useState } from "react";
import { VStack, IconButton, Heading, HStack } from "@chakra-ui/react";
import { IoLogoOctocat } from "react-icons/io5";
import { MENU_ITEMS } from "./Routes";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const handleMenuClick = (title: string) => {
    setSelectedMenu(title);
  };

  return (
    <VStack cursor="pointer" alignItems="left" w="full">
      <HStack p="4">
        <IconButton
          aria-label="logo"
          variant="unstyled"
          display="flex"
          p="0"
          icon={<IoLogoOctocat size="48" />}
          rounded="full"
        />
        <Heading>Tool</Heading>
      </HStack>
      <VStack alignItems="left" spacing="4">
        {MENU_ITEMS.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.title}
            title={menuItem.title}
            icon={menuItem.icon}
            size={menuItem.size}
            isSelected={selectedMenu === menuItem.title}
            handleMenuClick={handleMenuClick}
            linkTo={menuItem.linkTo}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default Sidebar;
