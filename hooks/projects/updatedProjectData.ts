import axios from "axios";
import { useQuery } from "react-query";

export const updateProjectData = async ({
  title,
  description,
  status,
  startDate,
  dueDate,
  createdBy,
  teamMembers,
  tasks,
  tags,
}: any) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/project/put_project",
      {
        // title: title,
        // description: description,
        // teamMembers: teamMembers,
        // status: status,
        // startDate: startDate,
        // dueDate: dueDate,
        // createdBy: createdBy,
        // tasks: tasks,
        // tags: tags,
        title,
        description,
        teamMembers,
        status,
        startDate,
        dueDate,
        createdBy,
        tasks,
        tags,
      }
    );
    console.log("response is" + response.data);
    return response.data;
  } catch (error) {
    console.log("Error updating project:", error);
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
};

export const useUpdatedProjectData = () => {
  return useQuery("updatedProjectData", updateProjectData);
};

// title: "m",
// description: "desc 33",
// teamMembers: ["cc", "dd", "ee"],
