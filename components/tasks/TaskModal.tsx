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

type TaskModalProps = { isOpen: boolean; onClose: () => void };
const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  const {
    task,
    description,
    status,
    createdBy,
    startDate,
    dueDate,
    assignedTo,
    dependency,
    dependencyList,
    setTask,
    setDescription,
  } = useTaskStore();
  const { tag, tagList } = useTagStore();

  const handleAddTask = async () => {
    try {
      axios
        .post(`/api/task/set_task`, {
          taskName: task,
          description,
          status,
          assignedTo,
          startDate,
          dueDate,
          createdBy,
          tags: tagList,
          dependencies: dependencyList,
        })

        .then((res) => {
          console.log("response is " + res.data);
        })
        .catch((err) => console.log("err is" + err));
    } catch (e) {
      console.error("error is" + e);
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
          <Status status={status} />
          <DateSelection startDate={startDate} dueDate={dueDate} />
          <CreatedBy createdBy={createdBy} data={UserData} />
          <AssignedTo assignedTo={assignedTo} data={UserData} />
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
          <Button colorScheme="blue" mr={3} onClick={handleAddTask}>
            Done
          </Button>
        </ModalFooter>
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
