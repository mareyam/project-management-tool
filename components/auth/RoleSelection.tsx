import { useUserStore } from "@/zustand-store/user";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";

const RoleSelection = () => {
  const { setRole } = useUserStore();
  return (
    <RadioGroup>
      <Radio value="admin" onClick={() => setRole("admin")}>
        admin
      </Radio>
      <Radio value="user" onClick={() => setRole("user")}>
        user
      </Radio>
    </RadioGroup>
  );
};

export default RoleSelection;
