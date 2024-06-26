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
  console.log(data._id);
  const clickedUser = data.find((user: any) => user.email === email);
  const userProjects = clickedUser ? clickedUser.projects : [];
  console.log("Users:", userProjects);
  return userProjects;
};

export const useUserProjects = (email: string) => {
  return useQuery(["userProjects", email], () => fetchUserProjects(email));
};

export const fetchUserNames = async () => {
  const response = await axios.get("http://localhost:3000/api/users/get_users");
  const userNames = response.data.map((userName: any) => userName.email);
  return userNames;
};

export const useUserNames = () => {
  return useQuery("userNames", fetchUserNames);
};

// export const useUserProjects = () => {
//   return useQuery("userProjects", fetchUserProjects);
// };
