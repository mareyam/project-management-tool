import { useMutation } from "react-query";
import axios from "axios";

const useTaskMutation = () => {
  const mutation = useMutation((postData) => {
    return axios.post("/api/task/set_task", postData);
  });

  const addTask = async (postData: any) => {
    try {
      const response = await mutation.mutateAsync(postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { addTask, isLoading: mutation.isLoading, isError: mutation.isError };
};

export default useTaskMutation;
