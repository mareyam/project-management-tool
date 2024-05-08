import { Checkbox, CheckboxGroup, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

type SelectTaskProps = {
  taskList?: string[];
  selectedTask: string[];
  setSelectedTask: (selectedTask: string[]) => void;
};

const SelectTask = ({
  taskList,
  selectedTask,
  setSelectedTask,
}: SelectTaskProps) => {
  const handleSelectTask = (task: string) => {
    if (selectedTask.includes(task)) {
      const updatedSelectedTasks = selectedTask.filter(
        (taskName: string) => taskName !== task
      );
      setSelectedTask(updatedSelectedTasks);
      console.log(task + " is removed");
    } else {
      setSelectedTask([...selectedTask, task]);
      console.log(task + " is added");
    }
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Tasks
      </Text>
      <br />

      {taskList?.map((task: string, index: number) => (
        <React.Fragment key={index}>
          <Checkbox
            value={task}
            checked={selectedTask?.includes(task)}
            onChange={() => handleSelectTask(task)}
          >
            <Text fontSize="12">{task}</Text>
          </Checkbox>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default SelectTask;
