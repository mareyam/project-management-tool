import React from "react";
import { Divider, GridItem, IconButton } from "@chakra-ui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgAttachment } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

const ActionButtons = () => {
  return (
    <>
      <GridItem colSpan={1}>
        <IconButton
          mr="-3"
          _hover={{
            bg: "none",
          }}
          p="0"
          bg="none"
          aria-label="dots-vertical"
          icon={<HiOutlineDotsVertical size="20" />}
        />
      </GridItem>
      <GridItem w="full" colSpan={10} justifyContent="flex-end" display="flex">
        <Divider w="100%" pt="2" />

        <IconButton
          _hover={{
            bg: "none",
          }}
          mr="-2"
          bg="none"
          aria-label="dots-vertical"
          icon={<CgAttachment size="12" />}
        />
        <IconButton
          _hover={{
            bg: "none",
          }}
          bg="none"
          aria-label="dots-vertical"
          icon={<SlCalender size="12" />}
        />
      </GridItem>
    </>
  );
};

export default ActionButtons;
