import axios from "axios";
import { useQuery } from "react-query";

export const fetchProjects = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/project/get_projects"
  );
  // console.log("get projects is");
  // console.log(JSON.stringify(data));
  return data;
};

export const useProjects = () => {
  return useQuery("projects", fetchProjects);
};
