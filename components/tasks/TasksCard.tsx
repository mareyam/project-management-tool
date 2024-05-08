import React, { useState } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import TaskModal from "./TaskModal";
import TableCard from "@/components/common/TableCard";
import COLUMNS from "@/data/table-columns/tasks";
import { useTasks } from "@/hooks/tasks/getTasks";
import UpdateTaskModal from "./UpdateTaskModal";

const TasksCard = () => {
  const [task, setTask] = useState<string>(" ");
  const { data, isLoading, error, refetch } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTaskModal,
    onOpen: onOpenTaskModal,
    onClose: onCloseTaskModal,
  } = useDisclosure();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  const handleDeleteTask = async (taskToDelete: string) => {
    try {
      await axios.delete(`/api/task/delete_task`, {
        data: { _id: taskToDelete },
      });
      refetch();
      data.filter((task: any) => task._id !== taskToDelete);
    } catch (error) {
      console.error("Error deleting task:", error + " " + taskToDelete);
    }
  };

  const handleOpenUpdateTaskModal = (task: string) => {
    setTask(task);

    onOpenTaskModal();
  };
  return (
    <>
      <Button onClick={onOpen}>open</Button>
      {isOpen && <TaskModal isOpen={isOpen} onClose={onClose} />}
      <TableCard
        data={data}
        columns={COLUMNS}
        handleDelete={handleDeleteTask}
        updateRecords={handleOpenUpdateTaskModal}
        record={"task"}
      />
      {isOpenTaskModal && (
        <UpdateTaskModal
          taskName={task}
          isOpen={isOpenTaskModal}
          onClose={onCloseTaskModal}
        />
      )}
    </>
  );
};

export default TasksCard;
