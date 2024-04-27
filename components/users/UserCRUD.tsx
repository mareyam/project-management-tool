import React, { useState } from "react";
import { Button, ButtonGroup, HStack, Input, Text } from "@chakra-ui/react";

const UserCRUD = () => {
  const [task, setTask] = useState<any>("");
  const [taskList, setTaskList] = useState<any>([]);
  const submitTask = () => {
    if (task == "") {
      return;
    }
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDeleteTask = (index: number) => {
    const updatedTaskList = taskList.filter((_: any, i: number) => i !== index);
    setTaskList(updatedTaskList);
  };

  const handleUpdateTask = (index: number) => {
    const updatedTaskList = taskList.filter((_: any, i: number) => i == index);
    console.log(updatedTaskList);
  };

  return (
    <>
      <HStack>
        <Input
          placeholder="enter task"
          size="md"
          type="text"
          value={task}
          onChange={(e: any) => setTask(e.target.value)}
          fontSize="12"
          maxLength={35}
        />
        <Button fontSize="12" w="24" onClick={submitTask}>
          Add
        </Button>
      </HStack>
      {taskList.map((item: any, index: number) => (
        <HStack py="1" w="full" justifyContent="space-between">
          <Text>{item}</Text>
          <Button fontSize="12" w="20" onClick={() => handleDeleteTask(index)}>
            Delete
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default UserCRUD;
