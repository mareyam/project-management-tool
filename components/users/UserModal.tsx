import React, { useState } from "react";
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
  Select,
  RadioGroup,
  Stack,
  Radio,
  CheckboxGroup,
  Checkbox,
  VStack,
} from "@chakra-ui/react";

import { UserData, ProjectsData, TasksData } from "@/data";

const UserModal = ({ isOpen, onClose }: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="label" textAlign="left" w="xs" fontSize="12">
              Name
            </Text>
            <br />
            <Input
              w="xs"
              fontSize="12"
              placeholder="Ecommerce project"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <Text as="label" textAlign="left" w="xs" fontSize="12">
              Email
            </Text>
            <br />

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              w="xs"
              fontSize="12"
              placeholder="Lorem epsum"
            />
            <br />

            <Text as="label" textAlign="left" w="xs" fontSize="12">
              Created by
            </Text>

            <Select placeholder="Created By" fontSize="12">
              {UserData.map((user: any) => (
                <option value="option1">{user.name}</option>
              ))}
            </Select>

            <Text as="label" textAlign="left" w="xs" fontSize="12">
              Select Projects
            </Text>
            <br />
            <CheckboxGroup>
              {ProjectsData.map((project, index) => (
                <>
                  <Checkbox value={index}>
                    <Text key={project.id}>{project.title}</Text>
                  </Checkbox>
                  <br />
                </>
              ))}
            </CheckboxGroup>
            <br />

            <Text as="label" textAlign="left" w="xs" fontSize="12">
              Select Task
            </Text>
            <br />

            <CheckboxGroup>
              {TasksData.map((task, index) => (
                <>
                  <Checkbox value={index}>
                    <Text key={task.taskId}>{task.taskName}</Text>
                  </Checkbox>
                  <br />
                </>
              ))}
            </CheckboxGroup>

            <br />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Modals isOpen={isOpen} onClose={onClose} header="add new user" /> */}
    </>
  );
};

export default UserModal;
