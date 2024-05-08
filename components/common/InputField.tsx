import React from "react";
import { Input, Text } from "@chakra-ui/react";

type InputFieldProps = {
  label: string;
  field: string;
  placeholder: string;
  setField: (createdBy: string) => void;
};

const InputField = ({
  label,
  field,
  placeholder,
  setField,
}: InputFieldProps) => {
  console.log(field);

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        {label}
      </Text>
      <br />
      <Input
        w="xs"
        fontSize="12"
        placeholder={placeholder}
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <br />
    </>
  );
};

export default InputField;
