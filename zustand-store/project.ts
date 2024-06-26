import { create } from "zustand";

export const STATUS = {
  DEFAULT: "IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
};
interface ProjectProps {
  title: string;
  description: string;
  status: string;
  color: string;
  createdBy: string;
  startDate: Date | null | string;
  dueDate: Date | null | string;
  tag: string;
  tagList: string[];
  teamMembers: string[];
  task: string;
  taskList: string[];
  selectedColor: number;
  selectedTeam: string[];
  selectedTasks: string[];

  setSelectedColor: (selectedColor: number) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setStatus: (status: string) => void;
  setCreatedBy: (createdBy: string) => void;
  setColor: (color: string) => void;
  setStartDate: (date: Date | null | string) => void;
  setDueDate: (date: Date | null | string) => void;

  setTeamMembers: (teamMembers: string[]) => void;
  setTag: (tag: string) => void;
  setTagList: (tag: string[]) => void;
  setTask: (task: string) => void;
  setTaskList: (tasks: string[]) => void;
  setSelectedTeam: (selectedTeam: string[]) => void;
  setSelectedTasks: (selectedTasks: string[]) => void;
}
export const useProjectStore = create<ProjectProps>()((set) => ({
  title: "",
  description: "",
  color: "",
  createdBy: "",
  task: "",
  tag: "",
  status: STATUS.DEFAULT,
  startDate: null,
  dueDate: null,
  selectedColor: 0,
  teamMembers: [],
  taskList: [],
  tagList: [],
  selectedTeam: [],
  selectedTasks: [],

  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setStatus: (status) => set({ status }),
  setCreatedBy: (createdBy) => set({ createdBy }),
  setColor: (color) => set({ color }),
  setStartDate: (startDate) => set({ startDate }),
  setDueDate: (dueDate) => set({ dueDate }),
  setTeamMembers: (teamMembers) => set({ teamMembers }),
  setTag: (tag) => set({ tag }),
  setTagList: (tagList) => set({ tagList }),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
  setTask: (task) => set({ task }),
  setTaskList: (taskList) => set({ taskList }),
  setSelectedTeam: (selectedTeam) => set({ selectedTeam }),
  setSelectedTasks: (selectedTasks) => set({ selectedTasks }),
}));
