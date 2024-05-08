import React, { useState } from "react";
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
} from "@chakra-ui/react";
import axios from "axios";
import { UserData } from "@/data";
import { useProjectStore } from "@/zustand-store/project";
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
import { useUserNames } from "@/hooks/users/getUsers";
import SelectTask from "../common/SelectTask";
import { useTasksNames } from "@/hooks/tasks/getTasks";
import { useTaskStore } from "@/zustand-store/task";
import useErrorSuccess from "@/hooks/misc/useErrorSuccess";
import usePostProjectMutation from "@/hooks/projects/postProject";

type ProjectModalProps = { isOpen: boolean; onClose: () => void };

const ProjectModal = ({ isOpen, onClose }: ProjectModalProps) => {
  const {
    title,
    description,
    createdBy,
    status,
    teamMembers,
    startDate,
    dueDate,
    selectedColor,
    setSelectedColor,
    setTitle,
    setDescription,
    setStatus,
    setCreatedBy,
    setTeamMembers,
    setStartDate,
    setDueDate,
    selectedTeam,
    setSelectedTeam,
    selectedTasks,
    setSelectedTasks,
  } = useProjectStore();

  const { tag, tagList, setTag, setTagList } = useTagStore();
  const { data: teamList } = useUserNames();
  const { data: taskNameList } = useTasksNames();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addProject } = usePostProjectMutation();

  const handleAddProject = async () => {
    const postData = {
      title,
      description,
      status,
      createdBy,
      teamMembers: selectedTeam,
      startDate: startDate ? startDate : Date.now(),
      dueDate: dueDate ? dueDate : Date.now(),
      tags: tagList,
      tasks: selectedTasks,
    };

    try {
      const data = await addProject(postData);
      console.log("Data posted successfully:", data);
      window.location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleProjectPostMessage = () => {
    useErrorSuccess(
      title,
      handleAddProject,
      onClose,
      showSuccess,
      showError,
      setShowError,
      setShowSuccess
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputField
            placeholder="title"
            label="Title"
            field={title}
            setField={setTitle}
          />
          <InputField
            placeholder="descrisption"
            label="Description"
            field={description}
            setField={setDescription}
          />
          <Status status={status} setStatus={setStatus} />

          <DateSelection
            setStartDate={setStartDate}
            setDueDate={setDueDate}
            startDate={startDate}
            dueDate={dueDate}
          />
          <CreatedBy
            setCreatedBy={setCreatedBy}
            createdBy={createdBy}
            data={UserData}
          />

          <SelectTeam
            teamList={teamList}
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
          />
          <SelectTask
            taskList={taskNameList}
            selectedTask={selectedTasks}
            setSelectedTask={setSelectedTasks}
          />

          <Tags
            setTag={setTag}
            setTagList={setTagList}
            tag={tag}
            tagList={tagList}
          />

          <Text as="label" textAlign="left" w="xs" fontSize="12">
            Add color code
          </Text>
          <ColorSelection selectedColor={selectedColor} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleProjectPostMessage} colorScheme="blue" mr={3}>
            Done
          </Button>
        </ModalFooter>
        {showError && (
          <Text
            w="full"
            fontSize="20"
            fontWeight="800"
            textAlign="center"
            color="red.500"
          >
            Add Project details
          </Text>
        )}

        {showSuccess && (
          <Text
            w="full"
            fontSize="20"
            fontWeight="800"
            textAlign="center"
            color="green.500"
          >
            Project uploaded successfully
          </Text>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
