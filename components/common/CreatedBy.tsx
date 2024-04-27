import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useProjectStore } from "@/zustand-store/project";

type CreateByProps = {
  createdBy: string;
  // data: Record<string, number | string | string[]>[];
  data: Record<string, any>[];
};
const CreatedBy = ({ createdBy, data }: CreateByProps) => {
  const { setCreatedBy } = useProjectStore();

  return (
    <>
      <Text as="label" textAlign="left" w="xs" fontSize="12">
        Created by
      </Text>
      <Select
        placeholder="Created By"
        fontSize="12"
        onChange={(event) => setCreatedBy(event?.target.value)}
        value={createdBy}
      >
        {data?.map((user: any) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default CreatedBy;