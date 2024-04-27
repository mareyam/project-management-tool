import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/config";
import { useRouter } from "next/router";
import UserCard from "@/components/users/UserCard";

const Team = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  // useEffect(() => {
  //   const userSession = localStorage.getItem("user");
  //   if (!user || !userSession) {
  //     router.push("/signin");
  //   }
  // }, [user]);

  // return <div>{user && <UserCard />}</div>;
  return (
    <div>
      <UserCard />
    </div>
  );
};

export default Team;
