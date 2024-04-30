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
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { UserData } from "@/data";
import { PRIORITY, useTaskStore } from "@/zustand-store/task";
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
import { updateTaskData } from "@/hooks/tasks/updateTaskData";
import Priority from "../common/Priority";

type UpdateTaskModalProps = {
  taskName: string;
  isOpen: boolean;
  onClose: () => void;
};
const UpdateTaskModal = ({
  taskName,
  isOpen,
  onClose,
}: UpdateTaskModalProps) => {
  const {
    description,
    status,
    createdBy,
    startDate,
    dueDate,
    assignedTo,
    priority,
    dependency,
    dependencyList,
    setTask,
    setDescription,
  } = useTaskStore();
  const { tag, tagList } = useTagStore();

  const mutation = useMutation(updateTaskData);
  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync({
        taskName,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        assignedTo,
        priority,
        tags: tagList,
        dependencies: dependencyList,
      });
    } catch (e) {
      console.error("Error updating user:", e);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputField
            placeholder="task"
            label="task"
            field={taskName}
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
          <Status status={status} />
          <DateSelection startDate={startDate} dueDate={dueDate} />

          <CreatedBy createdBy={createdBy} data={UserData} />
          <AssignedTo assignedTo={assignedTo} data={UserData} />
          <Priority priority={priority} />

          <Tags tag={tag} tagList={tagList} />
          <TaskDependency
            dependency={dependency}
            dependencyList={dependencyList}
          />
          <Text as="label" textAlign="left" w="xs" fontSize="12">
            Add color code
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            disabled={mutation.isLoading}
            onClick={handleUpdate}
          >
            {mutation.isLoading ? "Updating..." : "Update User"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateTaskModal;

/* //priority */

/* <ColorSelection
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          /> */
