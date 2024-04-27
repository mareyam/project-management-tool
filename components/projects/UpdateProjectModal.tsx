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
import { useProjects } from "@/hooks/getProjects";
import { useUserData } from "@/hooks/getUserData";
import { useTasks } from "@/hooks/getTasks";
import { useUserStore } from "@/zustand-store/user";

type UpdateProjectModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};
const UpdateProjectModal = ({
  title,
  isOpen,
  onClose,
}: UpdateProjectModalProps) => {
  const {
    // title,
    description,
    status,
    createdBy,
    teamMembers,
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
  // const { data: UserData } = useUserData();
  const { data: TasksData } = useTasks();

  const handleUpdate = async () => {
    try {
      axios
        .put(`/api/project/put_project`, {
          title,
        })
        .then((res) => {
          console.log("response is" + res);
        })
        .catch((err) => console.log("err is" + err));
      console.log(title);
    } catch (e) {
      console.error("error is" + e);
    }
  };

  const handleAddProject = async () => {
    try {
      axios
        .post(`/api/project/set_project`, {
          title,
          description,
          status,
          createdBy,
          teamMembers,
          startDate,
          dueDate,
          tags: tagList,
          tasks: taskList,
        })
        .then((res) => {
          console.log("response is 1" + res.data);
        })
        .catch((err) => console.log("err is" + err));
    } catch (e) {
      console.error("error is" + e);
    }
  };

  const handleCheckboxClick = (userName: string) => {
    if (teamMembers.includes(userName)) {
      const updatedTeamMembers = teamMembers.filter(
        (member: string) => member !== userName
      );
      setTeamMembers(updatedTeamMembers);
      console.log(userName + " is removed");
    } else {
      setTeamMembers([...teamMembers, userName]);
      console.log(userName + " is added");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as="label" textAlign="left" w="xs" fontSize="12">
            title
          </Text>
          <Input placeholder="title" value={title} />
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
            team={teamMembers}
            handleCheckboxClick={handleCheckboxClick}
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
              handleUpdate; // onClose();
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
