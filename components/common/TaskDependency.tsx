import React from "react";
import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { useTaskStore } from "@/zustand-store/task";

type TaskDependencyProps = {
  dependency: string;
  dependencyList: string[];
};
const TaskDependency = ({
  dependency,
  dependencyList,
}: TaskDependencyProps) => {
  const { setDependency, setDependencyList } = useTaskStore();

  const submitTag = () => {
    if (dependency == "") return;

    setDependencyList([...dependencyList, dependency]);
    setDependency("");
  };

  const handleDeleteDependency = (index: number) => {
    const updatedDependencyList = dependencyList.filter(
      (_: any, i: number) => i !== index
    );
    setDependencyList(updatedDependencyList);
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Add Dependency
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
        placeholder="TSK1, TSK4"
        value={dependency}
        onChange={(e) => setDependency(e.target.value)}
        maxLength={10}
      />

      <HStack>
        {dependencyList.map((item: any, index: number) => (
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
              onClick={() => handleDeleteDependency(index)}
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

export default TaskDependency;
