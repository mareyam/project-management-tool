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
  Input,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { UserData } from "@/data";
import { useProjectStore } from "@/zustand-store/project";
import { useTagStore } from "@/zustand-store/tag";
import {
  InputField,
  Status,
  DateSelection,
  CreatedBy,
  Tags,
  ColorSelection,
  SelectTeam,
} from "@/components/common";
import {
  useFetchProjectByTitle,
  useFetchProjectData,
} from "@/hooks/projects/getProjects";
import { useTasksNames } from "@/hooks/tasks/getTasks";
import { updateProjectData } from "@/hooks/projects/updatedProjectData";
import { useMutation } from "react-query";
import SelectTask from "../common/SelectTask";
import { useUserNames } from "@/hooks/users/getUsers";

type UpdateProjectModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const UpdateProjectModal = ({
  title,
  isOpen,
  onClose,
}: UpdateProjectModalProps) => {
  const {
    description,
    createdBy,
    startDate,
    dueDate,
    selectedColor,
    selectedTeam,
    selectedTasks,
    status,
    setStatus,
    setStartDate,
    setDueDate,
    setSelectedTeam,
    setSelectedTasks,
    setDescription,
    setCreatedBy,
  } = useProjectStore();

  const { tag, tagList, setTag, setTagList } = useTagStore();
  const { data: _id } = useFetchProjectByTitle(title);
  const { data: projectData } = useFetchProjectData(title);
  const { data: taskNameList } = useTasksNames();
  const { data: teamList } = useUserNames();

  const mutation = useMutation(updateProjectData);
  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync({
        _id,
        title,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        tasks: selectedTasks,
        tagList,
        teamMembers: selectedTeam,
      });
      window.location.reload();
    } catch (e) {
      console.error("Error updating title:", e);
    }
  };

  useEffect(() => {
    if (projectData) {
      setDescription(projectData?.description);

      if (projectData.startDate) {
        const formattedStartDate = format(projectData.startDate, "yyyy-MM-dd");
        setStartDate(formattedStartDate);
      }

      if (projectData.dueDate) {
        const formattedDueDate = format(projectData.dueDate, "yyyy-MM-dd");
        setStartDate(formattedDueDate);
      }

      const formattedStartDate = format(Date.now(), "yyyy-MM-dd");
      const formattedDueDate = format(Date.now(), "yyyy-MM-dd");

      setStartDate(formattedStartDate);
      setDueDate(formattedDueDate);

      setStatus(projectData?.status);
      setSelectedTeam(projectData?.teamMembers);
      setSelectedTasks(projectData?.tasks);
      setTag(projectData?.tags);
      setCreatedBy(projectData?.createdBy);
    }
  }, [projectData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update {_id} Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as="label" textAlign="left" w="xs" fontSize="12">
            title
          </Text>
          <Input placeholder="title" value={projectData?.title} />
          <InputField
            placeholder="description"
            label="Description"
            field={description}
            setField={setDescription}
          />
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

          <SelectTeam
            teamList={teamList}
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
          />

          <SelectTask
            taskList={taskNameList}
            selectedTask={selectedTasks}
            setSelectedTask={setSelectedTasks}
          />

          <Tags
            setTag={setTag}
            setTagList={setTagList}
            tag={tag}
            tagList={tagList}
          />

          <Text as="label" textAlign="left" w="xs" fontSize="12">
            Add color code
          </Text>
          <ColorSelection selectedColor={selectedColor} />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              handleUpdate();
              onClose();
            }}
            colorScheme="blue"
            mr={3}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProjectModal;

// const handleCheckboxClick = (userName: string) => {
//   if (teamMembers.includes(userName)) {
//     const updatedTeamMembers = teamMembers.filter(
//       (member: string) => member !== userName
//     );
//     setTeamMembers(updatedTeamMembers);
//     console.log(userName + " is removed");
//   } else {
//     setTeamMembers([...teamMembers, userName]);
//     console.log(userName + " is added");
//   }
// };
// console.log(
//   mutation.mutateAsync({
//     title,
//     description,
//     status,
//     startDate,
//     dueDate,
//     createdBy,
//     teamMembers,
//     tasks: taskList,
//     tags: tagList,
//   })
// );

// const handleAddProject = async () => {
//   try {
//     axios
//       .post(`/api/project/set_project`, {
//         title,
//         description,
//         status,
//         createdBy,
//         teamMembers,
//         startDate,
//         dueDate,
//         tags: tagList,
//         tasks: taskList,
//       })
//       .then((res) => {
//         console.log("response is 1" + res.data);
//       })
//       .catch((err) => console.log("err is" + err));
//   } catch (e) {
//     console.error("error is" + e);
//   }
// };

// const handleUpdate = async () => {
//   try {
//     axios
//       .put(`/api/project/put_project`, {
//         title: "new titlee",
//       })
//       .then((res) => {
//         console.log("response is" + res);
//       })
//       .catch((err) => console.log("err is" + err));
//     console.log(title);
//   } catch (e) {
//     console.error("error is" + e);
//   }
// };
