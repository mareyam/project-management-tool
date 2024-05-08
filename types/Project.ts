export type Project = {
  _id: string ;
  title: string;
  description: string;
  status: string;
  startDate: Date;
  dueDate: Date;
  createdBy: string;
  teamMembers: string[];
  tasks: string[];
  tags: string[];
  color: string;
};
