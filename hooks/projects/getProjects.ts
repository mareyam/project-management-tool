import axios from "axios";
import { useQuery } from "react-query";

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
  const { data } = await axios.get(
    "http://localhost:3000/api/project/get_projects"
  );
  console.log(data);
  console.log(title);
  const clickedTitle = data.find((project: any) => project.title === title);
  console.log(clickedTitle);
  const projects = clickedTitle ? clickedTitle.title : "";
  console.log("projects:", projects);
  return projects;
};

export const useFetchProjectByTitle = (title: string) => {
  return useQuery(["projectByTitle", title], () => fetchProjectByTitle(title));
};
