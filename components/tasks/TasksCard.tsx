import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import TaskModal from "./TaskModal";
import TableCard from "@/components/common/TableCard";
import COLUMNS from "@/data/table-columns/tasks";
import { useTasks } from "@/hooks/getTasks";

const TasksCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading, error, refetch } = useTasks();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  const handleDeleteTask = async (taskToDelete: string) => {
    try {
      await axios.delete(`/api/task/delete_task`, {
        data: { _id: taskToDelete },
      });
      // refetch();
      data.filter((task: any) => task._id !== taskToDelete);
    } catch (error) {
      console.error("Error deleting task:", error + " " + taskToDelete);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>open</Button>
      <TableCard
        data={data}
        columns={COLUMNS}
        handleDelete={handleDeleteTask}
      />
      {isOpen && <TaskModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default TasksCard;
