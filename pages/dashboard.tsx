import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Text } from "@chakra-ui/react";
import { auth } from "@/utils/config";
import { Projects } from "@/components/projects";
import { useUserStore } from "@/zustand-store/user";
import useLogout from "@/hooks/useLogout";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { role, email } = useUserStore();

  const handleLogout = useLogout();
  return (
    <>
      <button onClick={handleLogout}>Log out</button>
      <br />
      <Text>User type is {role} </Text>
      <Text>email is {email}</Text>
      {user && <Projects />}
    </>
  );
};

export default Dashboard;
