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
import { UserData } from "@/data";
import { useProjectStore } from "@/zustand-store/project";
import { useTaskStore } from "@/zustand-store/task";
import { useTagStore } from "@/zustand-store/tag";
import {
  InputField,
  Status,
  DateSelection,
  CreatedBy,
  Tags,
  ColorSelection,
  SelectTeam,
} from "@/components/common";
import AddTask from "../common/TaskCRUD/AddTask";
import {
  useFetchProjectByTitle,
  useProjects,
} from "@/hooks/projects/getProjects";
import { useTasks } from "@/hooks/tasks/getTasks";
import { updateProjectData } from "@/hooks/projects/updatedProjectData";
import { useMutation } from "react-query";

type UpdateProjectModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};
const UpdateProjectModal = ({ title, isOpen, onClose }: any) => {
  const {
    description,
    status,
    createdBy,
    // teamMembers,
    startDate,
    dueDate,
    selectedColor,
    setTitle,
    setDescription,
    setTeamMembers,
  } = useProjectStore();

  const { task, taskList } = useTaskStore();
  const { tag, tagList } = useTagStore();

  const { data: ProjectsData } = useProjects();
  const { data: projectByTitle } = useFetchProjectByTitle(title);
  const { data: TasksData } = useTasks();

  const teamMembers = [{ name: "team1" }, { name: "team2" }, { name: "team3" }];
  const mutation = useMutation(updateProjectData);

  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync({
        title,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        teamMembers,
        tasks: taskList,
        tags: tagList,
      });
      console.log("done");
    } catch (e) {
      console.error("Error updating title:", e);
      console.log("not done");
    }
  };

  // const handleCheckboxClick = (userName: string) => {
  //   if (teamMembers.includes(userName)) {
  //     const updatedTeamMembers = teamMembers.filter(
  //       (member: string) => member !== userName
  //     );
  //     setTeamMembers(updatedTeamMembers);
  //     console.log(userName + " is removed");
  //   } else {
  //     setTeamMembers([...teamMembers, userName]);
  //     console.log(userName + " is added");
  //   }
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update {title} Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as="label" textAlign="left" w="xs" fontSize="12">
            title
          </Text>
          <Input placeholder="title" value={title} />

          {/* <InputField
            placeholder="title"
            label="Title"
            field={title}
            setField={setTitle}
          /> */}

          <InputField
            placeholder="description"
            label="Description"
            field={description}
            setField={setDescription}
          />
          <Status status={status} />
          <DateSelection startDate={startDate} dueDate={dueDate} />
          <CreatedBy createdBy={createdBy} data={UserData} />
          <SelectTeam
            data={UserData}
            teamMembers={teamMembers}
            // handleCheckboxClick={handleCheckboxClick}
          />

          <Text as="label" textAlign="left" w="xs" fontSize="12">
            Add tasks
          </Text>
          <br />
          <AddTask task={task} taskList={taskList} />
          <Tags tag={tag} tagList={tagList} />
          <Text as="label" textAlign="left" w="xs" fontSize="12">
            Add color code
          </Text>
          <ColorSelection selectedColor={selectedColor} />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              handleUpdate(); // onClose();
            }}
            colorScheme="blue"
            mr={3}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProjectModal;

// console.log(
//   mutation.mutateAsync({
//     title,
//     description,
//     status,
//     startDate,
//     dueDate,
//     createdBy,
//     teamMembers,
//     tasks: taskList,
//     tags: tagList,
//   })
// );

// const handleAddProject = async () => {
//   try {
//     axios
//       .post(`/api/project/set_project`, {
//         title,
//         description,
//         status,
//         createdBy,
//         teamMembers,
//         startDate,
//         dueDate,
//         tags: tagList,
//         tasks: taskList,
//       })
//       .then((res) => {
//         console.log("response is 1" + res.data);
//       })
//       .catch((err) => console.log("err is" + err));
//   } catch (e) {
//     console.error("error is" + e);
//   }
// };

// const handleUpdate = async () => {
//   try {
//     axios
//       .put(`/api/project/put_project`, {
//         title: "new titlee",
//       })
//       .then((res) => {
//         console.log("response is" + res);
//       })
//       .catch((err) => console.log("err is" + err));
//     console.log(title);
//   } catch (e) {
//     console.error("error is" + e);
//   }
// };
