import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useTaskStore } from "@/zustand-store/task";

type StatusProps = {
  status: string;
  setStatus: (status: string) => void;
};

const STATUS_OPTIONS = ["completed", "pending", "in progress"];

const Status = ({ status, setStatus }: StatusProps) => {
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
        {STATUS_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Status;
