import React, { useState } from "react";
import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";

type SelectTeam = {
  data: Record<string, any>[];
  teamMembers: string[];
  handleCheckboxClick: (userName: string) => void;
};

const SelectTeam = ({ data, teamMembers, handleCheckboxClick }: any) => {
  const [teamList, setTeamList] = useState<string[]>([]);

  const handleSelectTeam = (user: string) => {
    if (teamList?.includes(user)) {
      const updatedteamList = teamList?.filter((name: string) => name !== user);
      setTeamList(updatedteamList);
      console.log(user + " is removed");
    } else {
      setTeamList([...teamList, user]);
      console.log(user + " is added");
    }
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Team members
      </Text>
      <br />

      {teamMembers?.map((user: any, index: number) => (
        <>
          <Checkbox
            key={index}
            value={user?.name}
            checked={teamList?.includes(user?.name)}
            onChange={() => handleSelectTeam(user?.name)}
          >
            <Text fontSize="12">{user?.name}</Text>
          </Checkbox>
          <br />
        </>
      ))}
    </>
  );
};

export default SelectTeam;
