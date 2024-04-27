import React from "react";
import { Input, Text } from "@chakra-ui/react";
import { AnyAaaaRecord } from "dns";
import { useProjectStore } from "@/zustand-store/project";

type DateSelectionProps = {
  startDate: Date | null;
  dueDate: Date | null;
};

const DateSelection = ({ startDate, dueDate }: DateSelectionProps) => {
  const { setStartDate, setDueDate } = useProjectStore();

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        start date
      </Text>
      <Input
        placeholder="Select Start Date"
        size="md"
        type="datetime-local"
        fontSize="12"
        onChange={(e: any) => setStartDate(e.target.value)}
      />
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        due date
      </Text>
      <Input
        placeholder="Select Due Date"
        fontSize="12"
        size="md"
        type="datetime-local"
        onChange={(e: any) => setDueDate(e.target.value)}
      />
    </>
  );
};

export default DateSelection;
