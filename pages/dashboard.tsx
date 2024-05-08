import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Text } from "@chakra-ui/react";
import { auth } from "@/utils/config";
import { Projects } from "@/components/projects";
import { useUserStore } from "@/zustand-store/user";
import useLogout from "@/hooks/misc/useLogout";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const { role, email, setRole, setEmail } = useUserStore();

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const userRole = localStorage.getItem("role");
    setRole(userRole ?? "admin");
    setEmail(userEmail ?? "");
    // window.location.reload();
    // if (!user && !userSession) {
    //   router.push("/signin");
    // }
  }, [user]);

  const handleLogout = useLogout();
  return (
    <>
      <button onClick={handleLogout}>Log out</button>
      <br />
      <Text>User type is {role} </Text>
      <Text>email is {email}</Text>
      <Projects />
    </>
  );
  return <Text>hello</Text>;
};

export default Dashboard;
