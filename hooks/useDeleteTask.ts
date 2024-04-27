// import { useMutation } from "react-query";
// import axios from "axios";

// const useDeleteTaskMutation = (refetch: any) => {
//   const deleteTaskMutation = useMutation(
//     (taskToDelete) =>
//       axios.delete(`/api/task/delete_task`, {
//         data: { _id: taskToDelete },
//       }),
//     {
//       onSuccess: () => {
//         refetch();
//       },
//       onError: (error) => {
//         console.error("Error deleting task:", error);
//       },
//     }
//   );

//   return deleteTaskMutation;
// };

// export default useDeleteTaskMutation;
