import { useUserStore } from "@/zustand-store/user";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";

type RoleSelectionProps = {
  role: string;
  setRole: (role: string) => void;
};
const RoleSelection = ({ role, setRole }: RoleSelectionProps) => {
  console.log("Current role:", role);
  const handleRoleChange = (selectedRole: string) => {
    console.log("Setting role to:", selectedRole);
    setRole(selectedRole);
  };

  console.log(role);
  return (
    <RadioGroup value={role} onChange={handleRoleChange}>
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
