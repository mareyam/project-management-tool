import axios from "axios";
import { useQuery } from "react-query";

export const updateTaskData = async ({
  _id,
  taskName,
  description,
  status,
  startDate,
  dueDate,
  createdBy,
  assignedTo,
  tagList,
  priority,
  dependencies,
}: any) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/task/put_task",
      {
        _id,
        taskName,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        assignedTo,
        priority,
        tagList,
        dependencies,
      }
    );
    console.log("response is" + _id + " " + tagList);
    console.log("response is");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(" in updated ERROR " + tagList);
    console.log("Error updating task:", error);
    throw new Error("Failed to update task");
  }
};

export const useUpdatedTaskData = () => {
  return useQuery("updatedTaskData", updateTaskData);
};
