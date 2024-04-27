import axios from "axios";
import { useQuery } from "react-query";

type useUpdatedUserProps = {
  email: string;
  projects: string[];
  tasks: string[];
};

export const useUpdatedUser = ({
  email,
  projects,
  tasks,
}: useUpdatedUserProps) => {
  return useQuery("updatedUsers", async () => {
    const { data } = await axios.put(`/api/put_user`, email, projects, tasks);
    console.log(data);
    return data;
  });
};

// import axios from "axios";
// import { useQuery, UseQueryResult } from "react-query";

// type fetchUpdatedUserProps = {
//   email: string;
//   projects: string[];
//   tasks: string[];
// };

// const fetchUpdatedUser = async ({
//   email,
//   projects,
//   tasks,
// }: fetchUpdatedUserProps): Promise<any> => {
//   const { data } = await axios.put(`/api/put_user`, {
//     email,
//     projects,
//     tasks,
//   });
//   console.log(data);
//   return data;
// };

// export const useUpdatedUser = (
//   props: fetchUpdatedUserProps
// ): UseQueryResult<any> => {
//   return useQuery("updatedUsers", () => fetchUpdatedUser(props));
// };
