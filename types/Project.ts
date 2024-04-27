export type Project = {
  id?: number;
  title: string;
  description: string;
  status?: string;
  startDate?: string;
  dueDate?: string;
  createdBy?: string;
  teamMembers?: {
    memberName: string;
  }[];
  tasks?: {
    taskId: string;
    taskName: string;
    status: string;
    assignedTo: string;
  }[];
  tags: string[];
  color: string;
};
