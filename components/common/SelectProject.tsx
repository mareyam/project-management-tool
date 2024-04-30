import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";
import { useUserStore } from "@/zustand-store/user";
import axios from "axios";

type SelectProjectProps = {
  projectsList: Record<string, any>[];
  selectedProjects: string[];
};

const SelectProject = ({
  projectsList,
  selectedProjects,
}: SelectProjectProps) => {
  const [checkedItems, setCheckedItems] = useState(selectedProjects);

  const {
    projectsList: projectListStore,
    setProjectsList: setProjectListStore,
  } = useUserStore();

  const handleSelectProject = (project: string) => {
    if (projectListStore.includes(project)) {
      const updatedProjectListStore = projectListStore.filter(
        (projectName: string) => projectName !== project
      );
      setProjectListStore(updatedProjectListStore);
      console.log(project + " is removed");
    } else {
      setProjectListStore([...projectListStore, project]);
      console.log(project + " is added");
    }
  };

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Select Project
      </Text>
      <br />
      <CheckboxGroup>
        {projectsList?.map(({ title, index }: any) => (
          <React.Fragment key={index}>
            <Checkbox
              value={title}
              isChecked={selectedProjects?.includes(title)}
              onChange={() => handleSelectProject(title)}
            >
              <Text fontSize="12">{title}</Text>
            </Checkbox>
            <br />
          </React.Fragment>
        ))}
      </CheckboxGroup>
    </>
  );
};

export default SelectProject;

// const handleCheckboxChange = (item: any) => {
//   if (selectedProjects.includes(item)) {
//     setCheckedItems(selectedProjects.filter((title) => title !== item));
//   } else {
//     setCheckedItems([...selectedProjects, item]);
//   }
// };

// useEffect(() => {
//   const updateProjectsInAPI = async () => {
//     try {
//       const response = await axios.put("/api/updateProjects", {
//         email,
//         projects: checkedItems,
//         task,
//       });
//       console.log("Projects updated in API:", response.data);
//     } catch (error) {
//       console.error("Error updating projects in API:", error);
//     }
//   };

//   updateProjectsInAPI();
// }, [checkedItems]);
//
//
//
//
//
//
//
//
//

// import React, { useState } from "react";
// import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";
// import { useUserStore } from "@/zustand-store/user";

// type SelectProjectProps = {
//   projectsList: Record<string, any>[];
//   selectedProjects: string[];
// };
// const SelectProject = ({
//   projectsList,
//   selectedProjects,
// }: SelectProjectProps) => {
//   const filteredPL = projectsList?.map((item) => item.title);
//   const [checkedItems, setCheckedItems] = useState(selectedProjects);

//   const handleCheckboxChange = (item: any) => {
//     if (selectedProjects.includes(item)) {
//       setCheckedItems(selectedProjects.filter((title) => title !== item));
//     } else {
//       setCheckedItems([...selectedProjects, item]);
//     }
//   };

//   return (
//     <>
//       <Text as="label" textAlign="left" w="xs" fontSize="12">
//         Select Project
//       </Text>
//       <br />
//       <Text>already selected are </Text>
//       {filteredPL?.map((item, index) => (
//         <Text fontSize="16">{item}&nbsp;</Text>
//       ))}
//       {projectsList?.map(({ title, index }: any) => (
//         <>
//           <Checkbox
//             key={index}
//             value={title}
//             isChecked={selectedProjects?.includes(title)}
//             onChange={() => handleCheckboxChange(title)}
//           >
//             <Text fontSize="12">{title}</Text>
//           </Checkbox>
//           <br />
//         </>
//       ))}
//     </>
//   );
// };

// export default SelectProject;
//
//
//
//
//
//
//

//import React, { useState } from "react";
// import { Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";
// import { useUserStore } from "@/zustand-store/user";

// type SelectProjectProps = {
//   projectsList: Record<string, any>[];
//   selectedProjects: string[];
// };
// const SelectProject = ({
//   projectsList,
//   selectedProjects,
// }: SelectProjectProps) => {
//   const filteredPL = projectsList?.map((item) => item.title);
//   const [checkedItems, setCheckedItems] = useState<any>();

//   const handleCheckboxChange = (item: any) => {
//     if (selectedProjects.includes(item)) {
//       setCheckedItems(selectedProjects.filter((title) => item !== title));
//       console.log("checkedItems");
//       console.log(checkedItems);

//       return;
//     } else {
//       setCheckedItems([...selectedProjects, item]);
//       console.log("checkedItems");
//       console.log(checkedItems);
//     }
//   };

//   return (
//     <>
//       <Text as="label" textAlign="left" w="xs" fontSize="12">
//         Select Project
//       </Text>
//       <br />
//       <Text>already selected are </Text>
//       {filteredPL?.map((item, index) => (
//         <Text fontSize="16">{item}&nbsp;</Text>
//       ))}
//       {projectsList?.map(({ title, index }: any) => (
//         <>
//           <Checkbox
//             key={index}
//             value={title}
//             isChecked={selectedProjects?.includes(title)}
//             onChange={() => handleCheckboxChange(title)}
//           >
//             <Text fontSize="12">{title}</Text>
//           </Checkbox>
//           <br />
//         </>
//       ))}
//     </>
//   );
// };

// export default SelectProject;
