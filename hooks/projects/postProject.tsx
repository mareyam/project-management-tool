import { useMutation } from "react-query";
import axios from "axios";

const usePostProjectMutation = () => {
  const mutation = useMutation((postData) => {
    return axios.post("/api/project/set_project", postData);
  });
  const addProject = async (postData: any) => {
    try {
      const response = await mutation.mutateAsync(postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    addProject,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};
export default usePostProjectMutation;
