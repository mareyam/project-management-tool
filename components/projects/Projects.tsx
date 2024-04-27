import { useState } from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import MinimizedProjectCard from "./MinimizedProjectCard";
import { ProjectsData, TasksData } from "@/data";
import COLUMNS from "@/data/table-columns/dashboard";
import TableCard from "@/components/common/TableCard";

const Project = () => {
  const [selectedProjectTasks, setSelectedProjectTasks] = useState<any[]>([]);

  //find project with specific id and store in selectedProject, if selectedProject exists
  //then store all the taskIds in projectTaskIds
  //filter from TasksData the projectTasksIds which match from TasksData

  const handleProjectClick = (projectId: number) => {
    const selectedProject = ProjectsData.find(
      (project) => project.id === projectId
    );
    console.log("selected proiject" + selectedProject?.id);

    if (selectedProject) {
      const projectTaskIds = selectedProject.tasks.map((task) => task.taskId);
      console.log("project task id" + projectTaskIds);
      const tasksOfSelectedProject = TasksData.filter((task) =>
        projectTaskIds.includes(task.taskId)
      );
      console.log("task id" + tasksOfSelectedProject);

      setSelectedProjectTasks(tasksOfSelectedProject);
      console.log("selected project id" + selectedProjectTasks);
    }
  };

  return (
    <>
      <Text fontWeight="600" color="gray">
        //Current projects ({ProjectsData?.length})
      </Text>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        {ProjectsData?.map((project: any, index: number) => (
          <GridItem
            mt="4"
            rounded="xl"
            boxShadow="lg"
            key={index}
            rowSpan={1}
            colSpan={1}
            onClick={() => handleProjectClick(project.id)}
            style={{ cursor: "pointer" }}
          >
            <MinimizedProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              color={project.color}
            />
          </GridItem>
        ))}
      </Grid>

      {selectedProjectTasks ? (
        <TableCard data={selectedProjectTasks} columns={COLUMNS} />
      ) : (
        <Text>Click on a project to show its details</Text>
      )}
    </>
  );
};

export default Project;
