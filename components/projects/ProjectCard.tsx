import React, { useState } from "react";
import axios from "axios";
import { Button, useDisclosure } from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";
import TableCard from "@/components/common/TableCard";
import COLUMNS from "@/data/table-columns/project";
import { useProjects } from "@/hooks/getProjects";
import UpdateProjectModal from "./UpdateProjectModal";

const ProjectCard = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>(" ");
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
      // refetch();
      data.filter((project: any) => project._id !== projectToDelete);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleOpenUpdateProjectModal = (email: string) => {
    setSelectedTitle(email);
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
      />
      {isOpenUpdateModal && (
        <UpdateProjectModal
          title={selectedTitle}
          isOpen={isOpenUpdateModal}
          onClose={onCloseUpdateModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
