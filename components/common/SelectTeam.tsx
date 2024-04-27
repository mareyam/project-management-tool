import React from "react";
import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";

type SelectTeam = {
  data: Record<string, any>[];
  teamMembers: string[];
  handleCheckboxClick: (userName: string) => void;
};
const SelectTeam = ({ data, teamMembers, handleCheckboxClick }: any) => {
  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Team members
      </Text>
      <br />

      <CheckboxGroup>
        {data?.map(({ user, index }: any) => (
          <Checkbox
            key={index}
            value={user?.name}
            checked={teamMembers?.includes(user?.name)}
            onChange={() => handleCheckboxClick(user?.name)}
          >
            <Text fontSize="12">
              {user?.name}
              {index}
            </Text>
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default SelectTeam;
