import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/config";
import { useRouter } from "next/router";
import TasksCard from "@/components/tasks/TasksCard";
import { Text } from "@chakra-ui/react";

const Tasks = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  // useEffect(() => {
  //   const userSession = localStorage.getItem("user");
  //   if (!user && !userSession) {
  //     router.push("/signin");
  //   }
  // }, [user]);

  return <div>{<TasksCard />}</div>;
};

export default Tasks;
