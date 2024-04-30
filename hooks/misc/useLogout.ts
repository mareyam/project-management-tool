import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/config";

const useLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth);
    localStorage.clear();
    router.push("/signin");
  };

  return handleLogout;
};

export default useLogout;
