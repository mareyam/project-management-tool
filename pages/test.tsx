import { useMutation } from "react-query";
import axios from "axios";

const updateUser = async ({ email, projectsList, taskList }: any) => {
  try {
    const response = await axios.put("http://localhost:3000/api/put_user", {
      email,
      projects: projectsList,
      tasks: taskList,
    });
    return response.data; // Assuming the response data contains updated user data
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

const MyComponent = () => {
  // Define email, projectsList, and taskList states or variables here
  const email = "aa@gmail.com";
  const projectsList = ["new", "data"];
  const taskList = ["new", "task"];

  const mutation = useMutation(updateUser);

  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync({ email, projectsList, taskList });
    } catch (e) {
      console.error("Error updating user:", e);
    }
  };

  return (
    <div>
      <button onClick={handleUpdate} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Updating..." : "Update User"}
      </button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
    </div>
  );
};

export default MyComponent;

// import React, { useState } from "react";
// import { Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";

// function App() {
//   const arr1 = ["n", "m", "o"];
//   const arr2 = ["n", "m", "o", "i", "y"];
//   const [checkedItems, setCheckedItems] = useState(arr1); // Start with arr1 checked

//   const handleCheckboxChange = (item) => {
//     if (checkedItems.includes(item)) {
//       setCheckedItems(checkedItems.filter((title) => item !== title));
//       // If the item is already checked, do nothing
//       return;
//     } else {
//       // Otherwise, add it to the checked items
//       setCheckedItems([...checkedItems, item]);
//     }
//   };

//   return (
//     <CheckboxGroup colorScheme="blue">
//       <VStack>
//         {arr2.map((item, index) => (
//           <Checkbox
//             key={index}
//             isChecked={checkedItems.includes(item)}
//             onChange={() => handleCheckboxChange(item)}
//           >
//             {item}
//           </Checkbox>
//         ))}
//       </VStack>
//     </CheckboxGroup>
//   );
// }

// export default App;

// import React from "react";
// import { Checkbox, Stack } from "@chakra-ui/react";

// const ArrayCheckbox = () => {
//   const array1 = ["m", "n", "i", "k"];
//   const array2 = [
//     {
//       _id: "662cb7a01e3fc7e521813e54",
//       title: "n",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:24.813Z",
//       updatedAt: "2024-04-27T08:30:24.813Z",
//       __v: 0,
//     },
//     {
//       _id: "662cb7a11e3fc7e521813e56",
//       title: "m",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:25.216Z",
//       updatedAt: "2024-04-27T08:30:25.216Z",
//       __v: 0,
//     },
//     {
//       _id: "662cb7a11e3fc7e521813e58",
//       title: "o",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:25.372Z",
//       updatedAt: "2024-04-27T08:30:25.372Z",
//       __v: 0,
//     },
//     {
//       _id: "662cb7a11e3fc7e521813e5a",
//       title: "i",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:25.540Z",
//       updatedAt: "2024-04-27T08:30:25.540Z",
//       __v: 0,
//     },
//     {
//       _id: "662cb7a11e3fc7e521813e5a",
//       title: "j",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:25.540Z",
//       updatedAt: "2024-04-27T08:30:25.540Z",
//       __v: 0,
//     },
//     {
//       _id: "662cb7a11e3fc7e521813e5a",
//       title: "hh",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:25.540Z",
//       updatedAt: "2024-04-27T08:30:25.540Z",
//       __v: 0,
//     },
//     {
//       _id: "662cb7a11e3fc7e521813e5a",
//       title: "k",
//       description: "m",
//       status: "IN_PROGRESS",
//       startDate: null,
//       dueDate: null,
//       createdBy: "Emily Brown",
//       teamMembers: [],
//       tasks: ["k", "l"],
//       tags: ["m", "l", "j"],
//       createdAt: "2024-04-27T08:30:25.540Z",
//       updatedAt: "2024-04-27T08:30:25.540Z",
//       __v: 0,
//     },
//   ];

//   // Create a state to keep track of checked items
//   const [checkedItems, setCheckedItems] = React.useState({});

//   // Function to update checkedItems state
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({ ...checkedItems, [name]: checked });
//   };

//   // Check if title from array2 is present in array1
//   const isChecked = (title) => array1.includes(title);

//   return (
//     <Stack>
//       {array2.map((item) => (
//         <Checkbox
//           key={item._id}
//           name={item.title}
//           isChecked={checkedItems[item.title] || isChecked(item.title)}
//           onChange={handleCheckboxChange}
//         >
//           {item.title}
//         </Checkbox>
//       ))}
//     </Stack>
//   );
// };

// export default ArrayCheckbox;

// import React from "react";
// import { Checkbox, Stack } from "@chakra-ui/react";

// const ArrayCheckbox = () => {
//   const array1 = ["a", "b", "c"];
//   const array2 = ["a", "b", "c", "d", "e", "f"];

//   // Create a state to keep track of checked items
//   const [checkedItems, setCheckedItems] = React.useState({});

//   // Function to update checkedItems state
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({ ...checkedItems, [name]: checked });
//   };

//   // Check if item from array1 is present in array2
//   const isChecked = (item) => array1.includes(item);

//   return (
//     <Stack>
//       {array2.map((item) => (
//         <Checkbox
//           key={item}
//           name={item}
//           isChecked={checkedItems[item] || isChecked(item)}
//           onChange={handleCheckboxChange}
//         >
//           {item}
//         </Checkbox>
//       ))}
//     </Stack>
//   );
// };

// export default ArrayCheckbox;

// import React from "react";
// import { Checkbox, Stack } from "@chakra-ui/react";

// const ArrayCheckbox = () => {
//   const array1 = ["a", "b", "c"];
//   const array2 = ["a", "b", "c", "d", "e", "f"];

//   // Create a state to keep track of checked items
//   const [checkedItems, setCheckedItems] = React.useState({});

//   // Function to update checkedItems state
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({ ...checkedItems, [name]: checked });
//   };

//   // Check if item from array1 is present in array2
//   const isChecked = (item) => array1.includes(item);

//   return (
//     <Stack>
//       {array2.map((item) => (
//         <Checkbox
//           key={item}
//           name={item}
//           isChecked={isChecked(item)}
//           onChange={handleCheckboxChange}
//         >
//           {item}
//         </Checkbox>
//       ))}
//     </Stack>
//   );
// };

// export default ArrayCheckbox;

// import React, { useEffect, useState } from "react";
// import {
//   Checkbox,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
// } from "@chakra-ui/react";
// import { UserData } from "@/data";
// import axios from "axios";

// const CheckboxGroup = () => {
//   const [teamMembers, setTeamMembers] = useState<any>([]);

//   const handleCheckboxClick = (userName: string) => {
//     console.log(teamMembers);
//     if (teamMembers.includes(userName)) {
//       const updatedTeamMembers = teamMembers.filter(
//         (member: any) => member !== userName
//       );
//       setTeamMembers(updatedTeamMembers);
//       console.log(userName + " is removed");
//     } else {
//       setTeamMembers([...teamMembers, userName]);
//       console.log(userName + " is added");
//     }
//   };

//   const handleAddProject = async () => {
//     try {
//       axios
//         .post(`/api/project/set_project`, {
//           teamMembers,
//         })
//         .then((res) => {
//           console.log("response is 1" + res);
//           console.log("response is 1" + res.data);
//         })
//         .catch((err) => console.log("err is" + err));
//     } catch (e) {
//       console.error("error isssssss" + e);
//     }
//   };

//   useEffect(() => {
//     console.log(teamMembers);
//   }, [teamMembers]);

//   return (
//     <div>
//       <FormControl as="fieldset">
//         <FormLabel as="legend">Select Team Members:</FormLabel>
//         {UserData.map((user, index) => (
//           <Checkbox
//             key={index}
//             id={`user_${index}`}
//             value={user.name}
//             isChecked={teamMembers.includes(user.name)}
//             onClick={() => handleCheckboxClick(user.name)}
//           >
//             {user.name}
//           </Checkbox>
//         ))}
//       </FormControl>
//       <Button onClick={handleAddProject} mt={4} colorScheme="blue">
//         Add Project
//       </Button>
//     </div>
//   );
// };

// export default CheckboxGroup;
