import React, { useState } from "react";
import { Button, Heading, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import TableCard from "@/components/common/TableCard";
import UserModal from "./UserModal";
import COLUMNS from "@/data/table-columns/users";
import { useUsers } from "@/hooks/getUsers";
import UpdateUserModal from "./UpdateUserModal";

const UserCard = () => {
  const [selectedEmail, setSelectedEmail] = useState<string>(" ");
  const { data, isLoading, error, refetch } = useUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenUpdateModal,
    onOpen: onOpenUpdateModal,
    onClose: onCloseUpdateModal,
  } = useDisclosure();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;

  const handleDeleteUser = async (userToDelete: string) => {
    try {
      await axios.delete(`/api/delete_user`, {
        data: { _id: userToDelete },
      });
      refetch();
      data.filter((user: any) => user._id !== userToDelete);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handleOpenUpdateUserModal = (email: string) => {
    setSelectedEmail(email);
    onOpenUpdateModal();
  };

  return (
    <>
      <Button onClick={onOpen}>open</Button>
      <Heading fontSize="16">Assign users to some task</Heading>
      {isOpen && <UserModal isOpen={isOpen} onClose={onClose} />}
      <TableCard
        data={data}
        columns={COLUMNS}
        handleDelete={handleDeleteUser}
        updateRecords={handleOpenUpdateUserModal}
      />
      {isOpenUpdateModal && (
        <UpdateUserModal
          email={selectedEmail}
          isOpen={isOpenUpdateModal}
          onClose={onCloseUpdateModal}
        />
      )}
    </>
  );
};

export default UserCard;
