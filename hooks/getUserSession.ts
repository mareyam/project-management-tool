import axios from "axios";
import { useQuery } from "react-query";

export const fetchUserSession = async () => {
  const { data } = await axios.get("http://localhost:3000/api/get_users");
  console.log(data);
  return data;
};

export const useUsers = () => {
  return useQuery("users", fetchUserSession);
};
