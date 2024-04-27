import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { UserData } from "@/data";
import axios from "axios";

const CheckboxGroup = () => {
  const [teamMembers, setTeamMembers] = useState<any>([]);

  const handleCheckboxClick = (userName: string) => {
    console.log(teamMembers);
    if (teamMembers.includes(userName)) {
      const updatedTeamMembers = teamMembers.filter(
        (member: any) => member !== userName
      );
      setTeamMembers(updatedTeamMembers);
      console.log(userName + " is removed");
    } else {
      setTeamMembers([...teamMembers, userName]);
      console.log(userName + " is added");
    }
  };

  const handleAddProject = async () => {
    try {
      axios
        .post(`/api/project/set_project`, {
          teamMembers,
        })
        .then((res) => {
          console.log("response is 1" + res);
          console.log("response is 1" + res.data);
        })
        .catch((err) => console.log("err is" + err));
    } catch (e) {
      console.error("error isssssss" + e);
    }
  };

  useEffect(() => {
    console.log(teamMembers);
  }, [teamMembers]);

  return (
    <div>
      <FormControl as="fieldset">
        <FormLabel as="legend">Select Team Members:</FormLabel>
        {UserData.map((user, index) => (
          <Checkbox
            key={index}
            id={`user_${index}`}
            value={user.name}
            isChecked={teamMembers.includes(user.name)}
            onClick={() => handleCheckboxClick(user.name)}
          >
            {user.name}
          </Checkbox>
        ))}
      </FormControl>
      <Button onClick={handleAddProject} mt={4} colorScheme="blue">
        Add Project
      </Button>
    </div>
  );
};

export default CheckboxGroup;
