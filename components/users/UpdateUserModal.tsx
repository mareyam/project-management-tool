import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import SelectProject from "../common/SelectProject";
import { useProjects, useProjectsNames } from "@/hooks/projects/getProjects";
import SelectTask from "../common/SelectTask";
import { useTasks, useTasksNames } from "@/hooks/tasks/getTasks";
import { useUserStore } from "@/zustand-store/user";
import { useFetchProjectByEmail, useUserData } from "@/hooks/users/getUserData";
import { useUserProjects } from "@/hooks/users/getUsers";
import { updateUserData } from "@/hooks/users/updateUserData";
import { useMutation } from "react-query";
import { useProjectStore } from "@/zustand-store/project";

const UpdateUserModal = ({ email, isOpen, onClose }: any) => {
  const { selectedTasks, setSelectedTasks } = useProjectStore();
  const { selectedProjects, setSelectedProjects, role, setRole } =
    useUserStore();

  const { data: taskNameList } = useTasksNames();
  const { data: projectNames } = useProjectsNames();
  console.log(projectNames + "<===and===>" + taskNameList);

  const { data: userData } = useUserData(email);
  const { data: _id } = useFetchProjectByEmail(email);

  const mutation = useMutation(updateUserData);
  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync({
        _id,
        email,
        projects: selectedProjects,
        tasks: selectedTasks,
        role,
      });
      window.location.reload();
    } catch (e) {
      console.error("Error updating user:", e);
    }
  };

  useEffect(() => {
    if (userData) {
      setSelectedTasks(userData?.tasks);
      setSelectedProjects(userData?.projects);
      setRole(localStorage.getItem("role") ?? "admin");
      console.log(role);
    }
  }, [userData]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>update {_id} details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="label" textAlign="left" w="xs" fontSize="12">
              email
            </Text>
            <Input placeholder="email" value={email} />
            <SelectProject
              projectsList={projectNames}
              selectedProjects={selectedProjects}
              setSelectedProjects={setSelectedProjects}
            />
            <br />
            <SelectTask
              taskList={taskNameList}
              selectedTask={selectedTasks}
              setSelectedTask={setSelectedTasks}
            />

            <br />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              disabled={mutation.isLoading}
              onClick={() => {
                handleUpdate();
                onClose();
              }}
            >
              {mutation.isLoading ? "Updating..." : "Update User"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateUserModal;

// const handleUpdate = async () => {
//   try {
//     axios
//       .put(`/api/put_user`, {
//         email,
//         projects: projectsList,
//         tasks: taskList,
//       })
//       .then((res) => {
//         console.log("response is" + res);
//       })
//       .catch((err) => console.log("err is" + err));
//   } catch (e) {
//     console.error("error is" + e);
//   }
// };

// const handleSelectProject = (project: any) => {
//   if (projectsList.includes(project)) {
//     const updatedProjects = projectsList.filter((p) => p !== project);
//     setProjectsList(updatedProjects);
//   } else {
//     const updatedProjects = [...projectsList, project];
//     setProjectsList(updatedProjects);
//   }
// };

//if already added then remove else add
// const handleSelectProject = (project: string) => {
//   if (projectsList.includes(project)) {
//     const updatedprojectsList = projectsList.filter(
//       (projectName: string) => projectName !== project
//     );
//     setProjectsList(updatedprojectsList);
//     console.log(project + " is removed");
//   } else {
//     setProjectsList([...projectsList, project]);
//     console.log(project + " is added");
//   }
// };

// const handleSelectTask = (project: string) => {
//   if (taskList.includes(project)) {
//     const updatedtaskList = taskList.filter(
//       (taskName: string) => taskName !== taskName
//     );
//     setTaskList(updatedtaskList);
//     console.log(project + " is removed");
//   } else {
//     setTaskList([...taskList, project]);
//     console.log(project + " is added");
//   }
// };

// useEffect(() => {
//   if (UserData) {
//     console.log("user data is" + UserData);
//     setProjectsList(UserData?.projects);
//     setTaskList(UserData?.tasks);
//   }
// }, [UserData]);

// useEffect(() => {
//   setProjectsList(projectsList);
//   setTaskList(taskList);
// }, [isOpen, projectsList, taskList]);
