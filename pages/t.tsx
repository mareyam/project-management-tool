import React, { useEffect, useState } from "react";
import { useFetchProjectData, useProjects } from "@/hooks/projects/getProjects";

const ExampleComponent = () => {
  const userData = {
    _id: "663a15515a153ad09e760908",
    email: "user@gmail.com",
    role: "user",
    tasks: ["a", "b", "c"],
    projects: ["b", "d"],
    createdAt: "2024-05-07T11:49:37.180Z",
    updatedAt: "2024-05-07T15:19:56.150Z",
    __v: 0,
  };

  const { data: projectList } = useProjects();
  console.log(projectList);

  const userProjectsInArray = projectList?.filter((project: any) =>
    userData?.projects.map((projectTitle) => project.title === projectTitle)
  );
  console.log(userProjectsInArray);

  return <div></div>;
};

export default ExampleComponent;

// const { data: proj } = useFetchProjectData(userData?.projects[0]);
// console.log(proj);

// console.log(userData);
// console.log(userData.projects);

// const projectList = userData.projects.map((item) => item);
// console.log(projectList);

// const { data: projectData } = useFetchProjectData(projectList[0]);
// console.log(projectData);

// const projects = userData.projects.map((item) => {
// const { data: projectData } = useFetchProjectData(item);
// console.log(projectData);
// });
