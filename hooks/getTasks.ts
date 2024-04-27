import axios from "axios";
import { useQuery } from "react-query";

export const fetchTasks = async () => {
  const { data } = await axios.get("http://localhost:3000/api/task/get_task");
  return data;
};

export const useTasks = () => {
  return useQuery("tasks", fetchTasks);
};
