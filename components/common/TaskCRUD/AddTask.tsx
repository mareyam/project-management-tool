import { useTaskStore } from "@/zustand-store/task";
import { Button, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

type AddTaskProps = {
  task: string;
  taskList: string[];
};

const AddTask = ({ task, taskList }: AddTaskProps) => {
  const { setTask, setTaskList } = useTaskStore();

  const submitTask = () => {
    if (task.trim() === "") {
      return;
    }
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDeleteTask = (index: number) => {
    const updatedTaskList = taskList.filter((_: any, i: number) => i !== index);
    setTaskList(updatedTaskList);
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
        <HStack py="1" w="full" justifyContent="space-between" key={index}>
          <Text>{item}</Text>
          <Button fontSize="12" w="20" onClick={() => handleDeleteTask(index)}>
            Delete
          </Button>
        </HStack>
      ))}
      <br />
    </>
  );
};

export default AddTask;
