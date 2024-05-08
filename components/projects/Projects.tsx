import { useEffect, useState } from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import MinimizedProjectCard from "./MinimizedProjectCard";
import { ProjectsData, TasksData } from "@/data";
import COLUMNS from "@/data/table-columns/dashboard";
import TableCard from "@/components/common/TableCard";
import { useUserData } from "@/hooks/users/getUserData";
import { useUserStore } from "@/zustand-store/user";
import { useFetchProjectData, useProjects } from "@/hooks/projects/getProjects";

const Project = () => {
  const { email, setEmail } = useUserStore();
  const { data: userData } = useUserData(email);
  const [selectedProjectTasks, setSelectedProjectTasks] = useState<any[]>([]);

  const { data: projectList } = useProjects();

  const userProjectsInArray = projectList?.filter((project: any) =>
    userData?.projects.some((projectTitle) => project.title === projectTitle)
  );
  console.log(userProjectsInArray);

  //find project with specific id and store in selectedProject, if selectedProject exists
  //then store all the taskIds in projectTaskIds
  //filter from TasksData the projectTasksIds which match from TasksData

  const handleProjectClick = (title: number) => {
    const selectedProject = userProjectsInArray.find(
      (project: any) => project.title == title
    );
    console.log(selectedProject);

    if (selectedProject) {
      const projectTaskNames = selectedProject.tasks.map((task: any) => task);
      console.log(projectTaskNames);
      setSelectedProjectTasks(projectTaskNames);
    }
  };

  const handleDelete = () => {};
  const updateRecord = () => {};
  const record = "";

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    setEmail(userEmail ?? "");
  }, [email]);

  return (
    <>
      <Text fontWeight="600" color="gray">
        Current projects
      </Text>
      {userData && (
        <>
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            {userProjectsInArray?.map((project: any, index: number) => (
              <GridItem
                mt="4"
                rounded="xl"
                boxShadow="lg"
                key={index}
                rowSpan={1}
                colSpan={1}
                onClick={() => handleProjectClick(project.title)}
                style={{ cursor: "pointer" }}
              >
                <MinimizedProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  color={project.color}
                  status={project.status}
                />
              </GridItem>
            ))}
          </Grid>

          {selectedProjectTasks ? (
            <TableCard
              data={selectedProjectTasks}
              columns={COLUMNS}
              handleDelete={handleDelete}
              updateRecords={updateRecord}
              record={record}
            />
          ) : (
            <Text>Click on a project to show its details</Text>
          )}
        </>
      )}
    </>
  );
};

export default Project;

// const { data: projectData } = useFetchProjectData(userData?.projects);
// console.log(projectData);

// userData?.projects.forEach((title) => {
//   const {
//     data: projectData,
//     isLoading,
//     isError,
//   } = useFetchProjectData(title);

//   if (isLoading) {
//     console.log("Loading...");
//   } else if (isError) {
//     console.error("Error fetching project data for", title);
//   } else {
//     console.log("Project Data:", projectData);
//   }
// });


