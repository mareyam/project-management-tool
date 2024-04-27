import axios from "axios";
import { useQuery } from "react-query";

export const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/api/get_users");
  return data;
};

export const useUsers = () => {
  return useQuery("users", fetchUsers);
};

const fetchUserProjects = async (email: string) => {
  const { data } = await axios.get("http://localhost:3000/api/get_users");
  const clickedUser = data.find((user: any) => user.email === email);
  const userProjects = clickedUser ? clickedUser.projects : [];
  // const userProjects = data.map((user: any) => user.projects + " ");
  console.log("User projects:", userProjects);
  return userProjects;
};

export const useUserProjects = (email: string) => {
  return useQuery(["userProjects", email], () => fetchUserProjects(email));
};

// export const useUserProjects = () => {
//   return useQuery("userProjects", fetchUserProjects);
// };
