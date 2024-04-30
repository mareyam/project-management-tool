import axios from "axios";
import { useQuery } from "react-query";

export const updateTaskData = async ({
  taskName,
  description,
  status,
  startDate,
  dueDate,
  createdBy,
  assignedTo,
  tags,
  priority,
  dependencies,
}: any) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/task/put_task",
      {
        taskName: taskName,
        description: description,
        status: status,
        startDate: startDate,
        dueDate: dueDate,
        createdBy: createdBy,
        assignedTo: assignedTo,
        tags,
        priority,
        dependencies,
      }
    );
    console.log("response is" + response.data);
    return response.data;
  } catch (error) {
    console.log("Error updating user:", error);
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

export const useUpdatedTaskData = () => {
  return useQuery("updatedTaskData", updateTaskData);
};
