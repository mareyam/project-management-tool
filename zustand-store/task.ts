import { create } from "zustand";

export const STATUS = {
  DEFAULT: "IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
};
export const PRIORITY = {
  DEFAULT: "MEDIUM",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
};

interface TaskProps {
  task: string;
  taskList: string[];
  title: string;
  description: string;
  status: string;
  startDate: Date | null;
  dueDate: Date | null;
  createdBy: string;
  assignedTo: string;
  teamMembers: string[];
  tagList: string[];
  selectedColor: number;
  color: string;
  tag: string;
  priority: string;
  dependency: string;
  dependencyList: string[];

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setStatus: (status: string) => void;
  setCreatedBy: (createdBy: string) => void;
  setAssignedTo: (assignedTo: string) => void;
  setTeamMembers: (teamMembers: string[]) => void;
  setStartDate: (startDate: Date) => void;
  setDueDate: (dueDate: Date) => void;
  setTask: (task: string) => void;
  setTaskList: (taskList: string[]) => void;
  setTag: (tag: string) => void;
  setTagList: (tagList: string[]) => void;
  setSelectedColor: (selectedColor: number) => void;
  setColor: (color: string) => void;
  setPriority: (color: string) => void;
  setDependency: (tag: string) => void;
  setDependencyList: (tags: string[]) => void;
}
export const useTaskStore = create<TaskProps>((set) => ({
  task: "",
  taskList: [],
  title: "",
  description: "",
  status: STATUS.DEFAULT,
  priority: PRIORITY.DEFAULT,
  startDate: null,
  dueDate: null,
  createdBy: "",
  assignedTo: "",
  teamMembers: [],
  tagList: [],
  selectedColor: 0,
  color: "",
  tag: "",
  dependency: "",
  dependencyList: [],

  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setStatus: (status) => set({ status }),
  setCreatedBy: (createdBy) => set({ createdBy }),
  setAssignedTo: (assignedTo) => set({ assignedTo }),
  setTeamMembers: (teamMembers) => set({ teamMembers }),
  setStartDate: (startDate) => set({ startDate }),
  setDueDate: (dueDate) => set({ dueDate }),
  setTask: (task) => set({ task }),
  setTaskList: (taskList) => set({ taskList }),
  setTag: (tag) => set({ tag }),
  setTagList: (tagList) => set({ tagList }),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
  setColor: (color) => set({ color }),
  setPriority: (color) => set({ color }),
  setDependency: (dependency) => set({ dependency }),
  setDependencyList: (dependencyList) => set({ dependencyList }),
}));
