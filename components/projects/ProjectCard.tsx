import React, { useState } from "react";
import axios from "axios";
import { Button, useDisclosure } from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";
import TableCard from "@/components/common/TableCard";
import COLUMNS from "@/data/table-columns/project";
import { useProjects } from "@/hooks/projects/getProjects";
import UpdateProjectModal from "./UpdateProjectModal";
import { deleteProjectData } from "@/hooks/projects/deleteProject";

const ProjectCard = () => {
  const [title, setTitle] = useState<string>(" ");

  const { data, isLoading, error, refetch } = useProjects();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenUpdateModal,
    onOpen: onOpenUpdateModal,
    onClose: onCloseUpdateModal,
  } = useDisclosure();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  const handleDeleteProject = async (projectToDelete: string) => {
    try {
      await axios.delete(`/api/project/delete_project`, {
        data: { _id: projectToDelete },
      });
      refetch();
      data.filter((project: any) => project._id !== projectToDelete);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleOpenUpdateProjectModal = (title: string, description: string) => {
    setTitle(title);
    onOpenUpdateModal();
  };
  return (
    <>
      <Button onClick={onOpen}>open</Button>
      {isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} />}
      <TableCard
        data={data}
        columns={COLUMNS}
        handleDelete={handleDeleteProject}
        updateRecords={handleOpenUpdateProjectModal}
        record={"title"}
      />
      {isOpenUpdateModal && (
        <UpdateProjectModal
          title={title}
          isOpen={isOpenUpdateModal}
          onClose={onCloseUpdateModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
