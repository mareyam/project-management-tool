import { useUserStore } from "@/zustand-store/user";
import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";
import React from "react";

type SelectTaskProps = {
  data: Record<string, any>[];
  selectedTask?: string[];
};

const SelectTask = ({ data, selectedTask }: SelectTaskProps) => {
  const { taskList, setTaskList } = useUserStore();

  const handleSelectTask = (project: string) => {
    if (taskList.includes(project)) {
      const updatedtaskList = taskList.filter(
        (taskName: string) => taskName !== taskName
      );
      setTaskList(updatedtaskList);
      console.log(project + " is removed");
    } else {
      setTaskList([...taskList, project]);
      console.log(project + " is added");
    }
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Task
      </Text>
      <br />

      <CheckboxGroup>
        {data?.map(({ taskName, index }: any) => (
          <>
            <Checkbox
              key={index}
              value={taskName}
              checked={selectedTask?.includes(taskName)}
              onChange={() => handleSelectTask(taskName)}
            >
              <Text fontSize="12">{taskName}</Text>
            </Checkbox>
            <br />
          </>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default SelectTask;
