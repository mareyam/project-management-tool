import { create } from "zustand";

interface UserProps {
  role: string;
  email: string;
  password: string;
  id: string;
  allEmails: string[];
  selectedProjects: string[];
  taskList: string[];

  setRole: (role: string) => void;
  setPassword: (state: string) => void;
  setEmail: (state: string) => void;
  setId: (state: string) => void;
  setAllEmails: (emails: string[]) => void;
  setSelectedProjects: (selectedProjects: string[]) => void;
  setTaskList: (taskList: string[]) => void;
}
export const useUserStore = create<UserProps>()((set) => ({
  role: "",
  email: "",
  id: "",
  password: "",
  allEmails: [],
  selectedProjects: [],
  taskList: [],
  setRole: (role: string) => set({ role }),
  setPassword: (password: string) => set({ password }),
  setEmail: (email: string) => set({ email }),
  setId: (id: string) => set({ id }),
  setAllEmails: (allEmails: string[]) => set({ allEmails }),
  setSelectedProjects: (selectedProjects: string[]) =>
    set({ selectedProjects }),
  setTaskList: (taskList: string[]) => set({ taskList }),
}));
