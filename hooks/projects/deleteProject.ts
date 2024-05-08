import axios from "axios";
import { useProjects } from "./getProjects";

export const deleteProjectData = async (
  projectToDelete: string,
  projectData: any
) => {
  try {
    await axios.delete(`/api/project/delete_project`, {
      data: { _id: projectToDelete },
    });
    projectData?.filter((project: any) => project._id !== projectToDelete);
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};

// import axios from "axios";
// import { useProjects } from "./getProjects";

// export const deleteProjectData = async (
//   projectToDelete: string,
//   projectData: any
// ) => {
//   try {
//     await axios.delete(`/api/project/delete_project`, {
//       data: { _id: projectToDelete },
//     });
//     console.log(projectToDelete);
//     projectData.filter((project: any) => project._id !== projectToDelete);
//     console.log(projectData);
//   } catch (error) {
//     console.error("Error deleting project:", error);
//   }
// };
