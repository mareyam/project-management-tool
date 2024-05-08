import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";

type SelectTeam = {
  teamList: string[];
  selectedTeam: string[];
  setSelectedTeam: (selectedTeam: string[]) => void;
};

const SelectTeam = ({ teamList, selectedTeam, setSelectedTeam }: any) => {
  const handleSelectTeam = (user: string) => {
    if (selectedTeam.includes(user)) {
      setSelectedTeam(selectedTeam?.filter((name: string) => name !== user));
      console.log(user + " is removed");
    } else {
      setSelectedTeam([...selectedTeam, user]);
      console.log(user + " is added");
    }
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Team members
      </Text>
      <br />

      {teamList?.map((user: string, index: number) => (
        <React.Fragment key={index}>
          <Checkbox
            value={user}
            checked={selectedTeam.includes(user)}
            onChange={() => handleSelectTeam(user)}
          >
            <Text fontSize="12">{user}</Text>
          </Checkbox>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default SelectTeam;
