import { create } from "zustand";

interface UserProps {
  role: string;
  email: string;
  password: string;
  id: string;
  allEmails: string[];
  projectsList: string[];
  taskList: string[];

  setRole: (state: string) => void;
  setPassword: (state: string) => void;
  setEmail: (state: string) => void;
  setId: (state: string) => void;
  setAllEmails: (emails: string[]) => void;
  setProjectsList: (projectsList: string[]) => void;
  setTaskList: (taskList: string[]) => void;
}
export const useUserStore = create<UserProps>()((set) => ({
  role: "",
  email: "",
  id: "",
  password: "",
  allEmails: [],
  projectsList: [],
  taskList: [],
  setRole: (role: string) => set({ role }),
  setPassword: (password: string) => set({ password }),
  setEmail: (email: string) => set({ email }),
  setId: (id: string) => set({ id }),
  setAllEmails: (allEmails: string[]) => set({ allEmails }),
  setProjectsList: (projectsList: string[]) => set({ projectsList }),
  setTaskList: (taskList: string[]) => set({ taskList }),
}));
