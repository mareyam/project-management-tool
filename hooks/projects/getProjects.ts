import axios from "axios";
import { useQuery } from "react-query";

type projectByTitleProps = {
  projects: string[];
  tasks: string[];
  _id: string;
};

export const fetchProjects = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/project/get_projects"
  );
  return data;
};
export const useProjects = () => {
  return useQuery("projects", fetchProjects);
};

export const fetchProjectByTitle = async (title: string) => {
  const response = await axios.get<any>(
    `http://localhost:3000/api/project/get_project_data?title=${title}`
  );

  return response.data._id;
};
export const useFetchProjectByTitle = (title: string) => {
  return useQuery(["projectByTitle", title], () => fetchProjectByTitle(title));
};

export const fetchProjectNames = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/project/get_projects"
  );
  const projectNames = response.data.map((project: any) => project.title);
  console.log(projectNames);
  return projectNames;
};

export const useProjectsNames = () => {
  return useQuery("projectNames", fetchProjectNames);
};

export const fetchProjectData = async (title: string) => {
  const response = await axios.get<any>(
    `http://localhost:3000/api/project/get_project_data?title=${title}`
  );
  // console.log(response.data);
  return response.data;
};

export const useFetchProjectData = (title: string) => {
  return useQuery(["projectData", title], () => fetchProjectData(title));
};
