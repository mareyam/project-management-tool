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
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { format } from "date-fns";
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
import { updateTaskData } from "@/hooks/tasks/updateTaskData";
import Priority from "../common/Priority";
import { useProjectStore } from "@/zustand-store/project";
import { useFetchTaskData, useFetchTaskName } from "@/hooks/tasks/getTasks";

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
  console.log(taskName);
  const {
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
  } = useTaskStore();
  const { data: _id } = useFetchTaskName(taskName);
  const {
    createdBy,
    setCreatedBy,
    startDate,
    dueDate,
    setStartDate,
    setDueDate,
  } = useProjectStore();
  const { tag, tagList, setTag, setTagList } = useTagStore();
  const { data: taskData } = useFetchTaskData(taskName);

  console.log(taskData);
  const mutation = useMutation(updateTaskData);
  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync({
        _id,
        taskName,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        assignedTo,
        priority,
        tagList,
        dependencies: dependencyList,
      });
      console.log("success" + " " + dependencyList + " " + tagList);
      window.location.reload();
    } catch (e) {
      console.log("error" + " " + dependencyList + " " + tagList);
      console.error("Error updating user:", e);
    }
  };

  useEffect(() => {
    if (taskData) {
      setDescription(taskData?.description);
      console.log(startDate);
      console.log(dueDate);

      if (taskData.startDate) {
        const formattedStartDate = format(taskData.startDate, "yyyy-MM-dd");
        setStartDate(formattedStartDate);
      }

      if (taskData.dueDate) {
        const formattedDueDate = format(taskData.dueDate, "yyyy-MM-dd");
        setStartDate(formattedDueDate);
      }

      const formattedStartDate = format(Date.now(), "yyyy-MM-dd");
      const formattedDueDate = format(Date.now(), "yyyy-MM-dd");

      setStartDate(formattedStartDate);
      setDueDate(formattedDueDate);

      setStatus(taskData?.status);
      setTag(taskData?.tags);
      setCreatedBy(taskData?.createdBy);
      setAssignedTo(taskData?.assignedTo);
      setPriority(taskData?.priority);
      setTag(taskData?.tag);
      setDependency(taskData?.dependencyList);
    }
  }, [taskData]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update {taskName} Task</ModalHeader>
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
  );
};

export default UpdateTaskModal;

/* //priority */

/* <ColorSelection
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          /> */
