import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/config";
import { useEffect } from "react";

const useAuthorization = (route: any) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const userSession = localStorage.getItem("user");
    if (!user && !userSession) {
      router.push(route);
    }
    console.log(user);
  }, [user, router, route]);

  return user;
};

export default useAuthorization;
