import React from "react";
import { Input, Text } from "@chakra-ui/react";

type DateSelectionProps = {
  startDate: Date | null | string | any;
  dueDate: Date | null | string | any;
  setStartDate: (startDate: Date | null | string | any) => void;
  setDueDate: (dueDate: Date | null | string | any) => void;
};

const DateSelection = ({
  startDate,
  dueDate,
  setStartDate,
  setDueDate,
}: DateSelectionProps) => {
  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        start date
      </Text>
      <Input
        placeholder="Select Start Date"
        size="md"
        type="date"
        fontSize="12"
        value={startDate ? startDate : Date.now()}
        onChange={(e: any) => setStartDate(e.target.value)}
      />
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        due date
      </Text>
      <Input
        placeholder="Select Due Date"
        fontSize="12"
        size="md"
        type="date"
        value={dueDate ? dueDate : Date.now()}
        onChange={(e: any) => setDueDate(e.target.value)}
      />
    </>
  );
};

export default DateSelection;
