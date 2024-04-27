export { default as UserCard } from "./UserCard";
export { default as UserCRUD } from "./UserCRUD";
export { default as UserModal } from "./UserModal";

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Image,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   IconButton,
// } from "@chakra-ui/react";
// import { AiOutlineEdit } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { UserData } from "@/data";

// const Users = () => {
//   return (
//     <Card rounded="lg" bg="white">
//       <CardBody>
//         <TableContainer>
//           <Text
//             textAlign="left"
//             fontSize="14"
//             color="gray.600"
//             fontWeight="500"
//             pb="2"
//           >
//             User List and Allocations
//           </Text>

//           <Table variant="simple">
//             <TableCaption>User List and Allocations</TableCaption>
//             <Thead>
//               <Tr>
//                 <Th></Th>
//                 <Th>Name</Th>
//                 <Th>Email</Th>
//                 <Th>#Tasks</Th>
//                 <Th>Project </Th>
//                 <Th>Action</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {UserData.map((user) => (
//                 <Tr>
//                   <Td>
//                     <Image h="12" rounded="full" src={user.avatar} />
//                   </Td>
//                   <Td>
//                     <Text>{user.name}</Text>
//                   </Td>
//                   <Td>
//                     <Text>{user.email}</Text>
//                   </Td>
//                   <Td>
//                     {user.tasks.map(({ taskId }) => (
//                       <Text p="2" key={taskId}>
//                         {taskId}
//                       </Text>
//                     ))}
//                   </Td>
//                   <Td>
//                     {user.projects.map(({ projectId }) => (
//                       <Text key={projectId}>{projectId}</Text>
//                     ))}
//                   </Td>
//                   <Th>
//                     <IconButton
//                       bg="transparent"
//                       rounded="full"
//                       aria-label="action"
//                       icon={<AiOutlineEdit size="16" />}
//                     />
//                     <IconButton
//                       bg="transparent"
//                       rounded="full"
//                       aria-label="action"
//                       icon={<RiDeleteBin6Line size="16" />}
//                     />
//                   </Th>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </TableContainer>
//       </CardBody>
//     </Card>
//   );
// };

// export default Users;
