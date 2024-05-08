import axios from "axios";
import { useQuery } from "react-query";

export const updateUserData = async ({
  _id,
  email,
  projects,
  tasks,
  role,
}: any) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/users/put_user",
      {
        _id,
        email,
        projects,
        tasks,
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
