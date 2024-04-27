import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useTaskStore } from "@/zustand-store/task";

type StatusProps = {
  status: string;
};

const STATUS = ["completed", "pending", "in progress"];

const Status = ({ status }: StatusProps) => {
  const { setStatus } = useTaskStore();

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Status
      </Text>

      <Select
        fontSize="12"
        placeholder="Select option"
        onChange={(event) => setStatus(event?.target.value)}
        value={status}
      >
        {STATUS.map((status: any) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Status;
