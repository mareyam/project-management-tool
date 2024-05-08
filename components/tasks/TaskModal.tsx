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
import { useTaskStore } from "@/zustand-store/task";
import { useTagStore } from "@/zustand-store/tag";
import {
  Tags,
  InputField,
  Status,
  DateSelection,
  AssignedTo,
  CreatedBy,
  TaskDependency,
} from "@/components/common";
import Priority from "../common/Priority";
import { useMutation } from "react-query";
import useTaskMutation from "@/hooks/tasks/postTask";
import useErrorSuccess from "@/hooks/misc/useErrorSuccess";

type TaskModalProps = { isOpen: boolean; onClose: () => void };
const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  const {
    task,
    description,
    status,
    assignedTo,
    dependency,
    dependencyList,
    priority,
    setTask,
    setStatus,
    setDescription,
    setAssignedTo,
    setDependency,
    setDependencyList,
    setPriority,
    createdBy,
    setCreatedBy,
    startDate,
    dueDate,
    setStartDate,
    setDueDate,
  } = useTaskStore();
  const { tag, tagList, setTag, setTagList } = useTagStore();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { addTask } = useTaskMutation();
  const handleAddTask = async () => {
    const postData = {
      taskName: task,
      description,
      status,
      assignedTo,
      startDate: startDate ? startDate : Date.now(),
      dueDate: dueDate ? dueDate : Date.now(),
      createdBy,
      tags: tagList,
      priority,
      dependencies: dependencyList,
    };

    try {
      const data = await addTask(postData);
      console.log("Data posted successfully:", data);
      window.location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleTaskPostMessage = () => {
    useErrorSuccess(
      task,
      handleAddTask,
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
        <ModalHeader>Add new Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputField
            placeholder="Title"
            label="Title"
            field={task}
            setField={setTask}
          />
          <br />
          <InputField
            placeholder="Description"
            label="Description"
            field={description}
            setField={setDescription}
          />
          <br />
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

          <AssignedTo
            assignedTo={assignedTo}
            setAssignedTo={setAssignedTo}
            data={UserData}
          />
          <Priority priority={priority} setPriority={setPriority} />

          <Tags
            setTag={setTag}
            setTagList={setTagList}
            tag={tag}
            tagList={tagList}
          />

          <TaskDependency
            setDependency={setDependency}
            setDependencyList={setDependencyList}
            dependency={dependency}
            dependencyList={dependencyList}
          />
          <Text as="label" textAlign="left" w="xs" fontSize="12">
            Add color code
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleTaskPostMessage}>
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
            Add task details
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

export default TaskModal;

/* //priority */

/* <ColorSelection
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          /> */

// const handleAddTask = async () => {
//     try {
//       axios
//         .post(`/api/task/set_task`, {
//           taskName: task,
//           description,
//           status,
//           assignedTo,
//           startDate: startDate ? startDate : Date.now(),
//           dueDate: dueDate ? dueDate : Date.now(),
//           createdBy,
//           tags: tagList,
//           priority,
//           dependencies: dependencyList,
//         })

//         .then((res) => {
//           console.log("response is " + res.data);
//         })
//         .catch((err) => console.log("err is" + err));
//     } catch (e) {
//       console.error("error is" + e);
//     }
//   };
//
