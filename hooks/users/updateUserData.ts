import axios from "axios";
import { useQuery } from "react-query";

export const updateUserData = async ({
  email,
  projectsList,
  taskList,
  role,
}: any) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/users/put_user",
      {
        email,
        projects: projectsList,
        tasks: taskList,
        role,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

export const useUpdatedUserData = () => {
  return useQuery("updatedUserData", updateUserData);
};
