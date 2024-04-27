import axios from "axios";
import { useQuery } from "react-query";

type getUserDataProps = {
  projects: string[];
  tasks: string[];
};

export const fetchUserData = async (email: string) => {
  const response = await axios.get<getUserDataProps>(
    `http://localhost:3000/api/get_user_data?email=${email}`
  );
  const UserData = response.data;
  console.log(UserData);
  return UserData;
};

export const useUserData = () => {
  return useQuery<getUserDataProps>("userData", fetchUserData);
};

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/api/get_user_data?email=${email}`);
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
