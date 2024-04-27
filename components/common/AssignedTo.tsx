import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useTaskStore } from "@/zustand-store/task";

type AssignedToProps = {
  assignedTo: string;
  data: Record<string, any>[];
};
const AssignedTo = ({ assignedTo, data }: AssignedToProps) => {
  const { setAssignedTo } = useTaskStore();

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Assigned by
      </Text>
      <Select
        placeholder="Assigned By"
        fontSize="12"
        onChange={(event) => setAssignedTo(event?.target.value)}
        value={assignedTo}
      >
        {data?.map((user: any) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default AssignedTo;
