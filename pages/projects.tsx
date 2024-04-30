import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/config";
import { useRouter } from "next/router";
import { ProjectCard } from "@/components/projects";
import { Box } from "@chakra-ui/react";

const Projects = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  // useEffect(() => {
  //   const userSession = localStorage.getItem("user");
  //   if (!user && !userSession) {
  //     router.push("/signin");
  //   }
  // }, [user]);

  return <Box w="full">{<ProjectCard />}</Box>;
};

export default Projects;
