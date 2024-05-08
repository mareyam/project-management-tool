import React from "react";
import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { useTagStore } from "@/zustand-store/tag";

type TagsProps = {
  tag: string;
  tagList: string[];
  setTag: (tag: string) => void;
  setTagList: (tagList: string[]) => void;
};
const Tags = ({ tag, tagList, setTag, setTagList }: TagsProps) => {
  console.log(tag + " amd " + tagList);
  const submitTag = () => {
    if (tag == "") return;

    setTagList([...tagList, tag]);
    setTag("");
  };

  const handleDeleteTag = (index: number) => {
    const updatedTagList = tagList.filter((_: any, i: number) => i !== index);
    setTagList(updatedTagList);
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Add tag
      </Text>
      <br />

      <Input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submitTag();
          }
        }}
        h="8"
        w="28"
        rounded="full"
        fontSize="12"
        placeholder="Reactt"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        maxLength={10}
      />

      <HStack>
        {tagList.map((item: any, index: number) => (
          <HStack
            rounded="full"
            border="1px solid gray"
            w="28"
            h="8"
            py="1"
            justifyContent="space-between"
            key={index}
          >
            <Text isTruncated pl="2">
              {item}
            </Text>
            <Button
              rounded="full"
              bg="transparent"
              fontSize="12"
              h="4"
              _hover={{
                bg: "transparent",
              }}
              onClick={() => handleDeleteTag(index)}
            >
              x
            </Button>
          </HStack>
        ))}
      </HStack>
      <br />
    </>
  );
};

export default Tags;
