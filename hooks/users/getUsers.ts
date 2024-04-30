import axios from "axios";
import { useQuery } from "react-query";

export const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3000/api/users/get_users");
  return data;
};

export const useUsers = () => {
  return useQuery("users", fetchUsers);
};

const fetchUserProjects = async (email: string) => {
  const { data } = await axios.get("http://localhost:3000/api/users/get_users");
  console.log(data);
  const clickedUser = data.find((user: any) => user.email === email);
  const userProjects = clickedUser ? clickedUser.projects : [];
  console.log("Users:", userProjects);
  return userProjects;
};

export const useUserProjects = (email: string) => {
  return useQuery(["userProjects", email], () => fetchUserProjects(email));
};

// export const useUserProjects = () => {
//   return useQuery("userProjects", fetchUserProjects);
// };
