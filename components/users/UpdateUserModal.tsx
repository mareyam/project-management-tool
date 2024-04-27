import React from "react";
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
import { useProjects } from "@/hooks/getProjects";
import SelectTask from "../common/SelectTask";
import { useTasks } from "@/hooks/getTasks";
import { useUserStore } from "@/zustand-store/user";
import { useUserData } from "@/hooks/getUserData";
import { useUserProjects } from "@/hooks/getUsers";

const UpdateUserModal = ({ email, isOpen, onClose }: any) => {
  const { projectsList, taskList } = useUserStore();

  const { data: ProjectsData } = useProjects();
  const { data: UserData } = useUserData();
  const { data: UserProject } = useUserProjects(email);
  const { data: TasksData } = useTasks();

  console.log(ProjectsData);
  console.log("UserProject");
  console.log(UserProject);
  const handleUpdate = async () => {
    try {
      axios
        .put(`/api/put_user`, {
          email,
          projects: projectsList,
          tasks: taskList,
        })
        .then((res) => {
          console.log("response is" + res);
        })
        .catch((err) => console.log("err is" + err));
    } catch (e) {
      console.error("error is" + e);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="label" textAlign="left" w="xs" fontSize="12">
              email
            </Text>
            <Input placeholder="email" value={email} />
            <SelectProject
              projectsList={projectsList}
              data={ProjectsData}
              selectedProjects={UserProject}
              // handleCheckboxClick={handleSelectProject}
            />
            <br />
            <SelectTask
              selectedTask={taskList}
              data={TasksData}
              // handleSelectTask={handleSelectTask}
            />
            <br />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateUserModal;

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
