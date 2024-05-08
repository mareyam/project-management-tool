import axios from "axios";
import { useQuery } from "react-query";

type getUserDataProps = {
  projects: string[];
  tasks: string[];
  _id: string;
};

export const fetchProjectByEmail = async (email: string) => {
  const response = await axios.get<any>(
    `http://localhost:3000/api/users/get_user_data?email=${email}`
  );

  console.log(response.data);
  console.log(response.data._id);

  return response.data._id;
};

export const useFetchProjectByEmail = (email: string) => {
  return useQuery(["projectByEmail", email], () => fetchProjectByEmail(email));
};

export const fetchUserData = async (email: string) => {
  const response = await axios.get<getUserDataProps>(
    `http://localhost:3000/api/users/get_user_data?email=${email}`
  );
  console.log(response.data);
  console.log(response.data._id);

  return response.data;
};

export const useUserData = (email: string) => {
  return useQuery(["userData", email], () => fetchUserData(email));
};

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/api/users/get_user_data?email=${email}`);
//       const userData = response.data;
//       console.log("response is" + userData.projects);
//       setSelectedProjects(userData.projects);
//       setSelectedTasks(userData.tasks);
//       console.log(selectedProjects + " and " + selectedTasks);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   fetchData();
// }, [email]);
