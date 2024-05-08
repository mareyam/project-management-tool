import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useTaskStore, PRIORITY } from "@/zustand-store/task";

type PriorityProps = {
  priority: string;
  setPriority: (priority: string) => void;
};

const Priority = ({ priority, setPriority }: PriorityProps) => {
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
        {Object.keys(PRIORITY).map((key) => (
          <option key={key} value={PRIORITY[key]}>
            {PRIORITY[key]}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Priority;
