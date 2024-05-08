import React, { useState } from "react";
import { VStack, IconButton, Heading, HStack } from "@chakra-ui/react";
import { IoLogoOctocat } from "react-icons/io5";
import { MENU_ITEMS } from "./Routes";
import SidebarMenuItem from "./SidebarMenuItem";
import { useMiscStore } from "@/zustand-store/misc";

const Sidebar = () => {
  const { selectedMenu, setSelectedMenu } = useMiscStore();

  const handleMenuClick = (title: string) => {
    setSelectedMenu(title);
  };

  return (
    <VStack cursor="pointer" alignItems="left" w="52">
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
