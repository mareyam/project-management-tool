import axios from "axios";
import { useQuery } from "react-query";

export const updateProjectData = async ({
  _id,
  title,
  description,
  status,
  startDate,
  dueDate,
  createdBy,
  tasks,
  tagList,
  teamMembers,
}: any) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/project/put_project",
      {
        _id,
        title,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        tasks,
        tagList,
        teamMembers,
      }
    );
    console.log(" in updated " + tagList);
    console.log("response is");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(" in updated ERROR " + tagList);
    throw new Error("Failed to update project");
  }
};

export const useUpdatedProjectData = () => {
  return useQuery("updatedProjectData", updateProjectData);
};
