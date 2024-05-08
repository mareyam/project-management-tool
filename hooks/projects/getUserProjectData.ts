import axios from "axios";
import { useQuery } from "react-query";

export const fetchProjectData = async (title: string) => {
  const response = await axios.get<any>(
    `http://localhost:3000/api/project/get_project_data?title=${title}`
  );
  //   console.log(response.data);
  return response.data;
};

export const useFetchProjectData = (title: string) => {
  return useQuery(["projectData", title], () => fetchProjectData(title));
};
