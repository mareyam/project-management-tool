import React, { useState } from "react";
import { Button, Heading, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import TableCard from "@/components/common/TableCard";
import COLUMNS from "@/data/table-columns/users";
import { useUsers } from "@/hooks/users/getUsers";
import UpdateUserModal from "./UpdateUserModal";

const UserCard = () => {
  const [email, setEmail] = useState<string>(" ");
  const [id, setId] = useState<string>(" ");
  const { data, isLoading, error, refetch } = useUsers();
  const {
    isOpen: isOpenUpdateModal,
    onOpen: onOpenUpdateModal,
    onClose: onCloseUpdateModal,
  } = useDisclosure();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  const handleDeleteUser = async (userToDelete: string) => {
    try {
      await axios.delete(`/api/users/delete_user`, {
        data: { _id: userToDelete },
      });
      refetch();
      data.filter((user: any) => user._id !== userToDelete);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handleOpenUpdateUserModal = (email: string) => {
    setEmail(email);
    onOpenUpdateModal();
  };

  return (
    <>
      <Heading fontSize="16">Assign users to some task</Heading>
      <TableCard
        data={data}
        columns={COLUMNS}
        handleDelete={handleDeleteUser}
        updateRecords={handleOpenUpdateUserModal}
        record={"email"}
      />
      {isOpenUpdateModal && (
        <UpdateUserModal
          email={email}
          isOpen={isOpenUpdateModal}
          onClose={onCloseUpdateModal}
        />
      )}
    </>
  );
};

export default UserCard;
