import React from "react";
import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";
import { useUserStore } from "@/zustand-store/user";

type SelectProjectProps = {
  data: Record<string, any>[];
  projectsList: string[];
  selectedProjects: string[];
};
const SelectProject = ({
  data,
  projectsList,
  selectedProjects,
}: SelectProjectProps) => {
  const { setProjectsList } = useUserStore();

  console.log(selectedProjects);
  console.log(data);

  const handleSelectProject = (project: string) => {
    setProjectsList(selectedProjects);
    console.log(projectsList);
    const updatedProjects = projectsList.includes(project)
      ? projectsList.filter((p) => p !== project)
      : [...projectsList, project];
    setProjectsList(updatedProjects);
    console.log(projectsList);
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Project
      </Text>
      <br />
      <Text>already selected are </Text>
      {selectedProjects?.map((item, index) => (
        <Text fontSize="16">{item}&nbsp;</Text>
      ))}
      <CheckboxGroup value={projectsList}>
        {data?.map(({ title, index }: any) => (
          <>
            <Checkbox
              key={index}
              value={title}
              isChecked={selectedProjects?.includes(title)}
              onChange={() => handleSelectProject(title)}
            >
              <Text fontSize="12">{title}</Text>
            </Checkbox>
            <br />
          </>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default SelectProject;
