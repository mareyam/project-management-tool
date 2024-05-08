import axios from "axios";
import { useQuery } from "react-query";

type taskByIdProps = {
  projects: string[];
  tasks: string[];
  _id: string;
};

export const fetchTasks = async () => {
  const { data } = await axios.get("http://localhost:3000/api/task/get_task");
  return data;
};

export const useTasks = () => {
  return useQuery("tasks", fetchTasks);
};

export const fetchTaskNames = async () => {
  const response = await axios.get("http://localhost:3000/api/task/get_task");
  const taskNames = response.data.map((task: any) => task.taskName);
  console.log(taskNames);
  return taskNames;
};

export const useTasksNames = () => {
  return useQuery("taskNames", fetchTaskNames);
};

export const fetchTaskId = async (taskName: string) => {
  const response = await axios.get<taskByIdProps>(
    `http://localhost:3000/api/task/get_task_data?taskName=${taskName}`
  );

  const taskData = response.data;
  const taskId = taskData._id;
  return taskId;
};

export const useFetchTaskName = (taskName: string) => {
  return useQuery(["taskByName", taskName], () => fetchTaskId(taskName));
};

export const fetchTaskData = async (taskName: string) => {
  console.log(taskName);
  const response = await axios.get<any>(
    `http://localhost:3000/api/task/get_task_data?taskName=${taskName}`
  );
  console.log(response.data);
  return response.data;
};

export const useFetchTaskData = (taskName: string) => {
  return useQuery(["taskData", taskName], () => fetchTaskData(taskName));
};
