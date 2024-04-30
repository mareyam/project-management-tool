import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useTaskStore } from "@/zustand-store/task";

type PriorityProps = {
  priority: string;
};
const PRIORITY = ["low", "medium", "high"];

const Priority = ({ priority }: PriorityProps) => {
  console.log(priority);

  const { setPriority } = useTaskStore();

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Priority
      </Text>
      <Select
        placeholder="Priority"
        fontSize="12"
        onChange={(event) => setPriority(event?.target.value)}
        value={priority}
      >
        {PRIORITY?.map((priority: any, index: number) => (
          <option key={index} value={priority}>
            {priority}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Priority;
