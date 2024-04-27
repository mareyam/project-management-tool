const Projects = [
  {
    id: 1,
    title: "Project A",
    description: "Description of Project A",
    status: "In Progress",
    startDate: "2024-04-01",
    endDate: "2024-05-01",
    dueDate: "2024-05-15",
    createdBy: "Maryam",
    teamMembers: [
      { memberName: "John Doe" },
      { memberName: "Alice Smith" },
      { memberName: "Bob Johnson" },
    ],
    tasks: [
      {
        taskId: "TSK1",
        taskName: "Task 1",
        status: "In Progress",
        assignedTo: "John Doe",
      },
      {
        taskId: "TSK2",
        taskName: "Task 2",
        status: "Completed",
        assignedTo: "Alice Johnson",
      },
    ],
    tags: ["Frontend", "React"],
    color: "red.100",
  },
  {
    id: 2,
    title: "Project B",
    description: "Description of Project B",
    status: "Pending",
    startDate: "2024-04-10",
    endDate: "2024-05-10",
    dueDate: "2024-06-01",
    createdBy: "John Doe",
    teamMembers: [
      { memberName: "John Doe" },
      { memberName: "Alice Smith" },
      { memberName: "Bob Johnson" },
    ],
    tasks: [
      {
        taskId: "TSK3",
        taskName: "Task 3",
        status: "In Progress",
        assignedTo: "John Doe",
      },
      {
        taskId: "TSK4",
        taskName: "Task 4",
        status: "Completed",
        assignedTo: "John Doe",
      },
    ],

    tags: ["FullStack", "MongoDB"],
    color: "pink.200",
  },
  {
    id: 3,
    title: "Project C",
    description: "Description of Project C",
    status: "Completed",
    startDate: "2024-03-20",
    endDate: "2024-04-30",
    dueDate: "2024-04-15",
    createdBy: "John Doe",
    teamMembers: [
      { memberName: "John Doe" },
      { memberName: "Alice Smith" },
      { memberName: "Bob Johnson" },
    ],
    tasks: [
      {
        taskId: "TSK5",
        taskName: "Task 5",
        status: "In Progress",
        assignedTo: "John Doe",
      },
      {
        taskId: "TSK6",
        taskName: "Task 6",
        status: "Completed",
        assignedTo: "John Doe",
      },
    ],

    tags: ["UI/UX", "Design"],
    color: "green.200",
  },
  {
    id: 4,
    title: "Project D",
    description: "Description of Project D",
    status: "In Progress",
    startDate: "2024-04-05",
    endDate: "2024-05-20",
    dueDate: "2024-06-05",
    createdBy: "John Doe",
    teamMembers: [
      { memberName: "John Doe" },
      { memberName: "Alice Smith" },
      { memberName: "Bob Johnson" },
    ],
    tasks: [
      {
        taskId: "TSK7",
        taskName: "Task 7",
        status: "In Progress",
        assignedTo: "John Doe",
      },
      {
        taskId: "TSK8",
        taskName: "Task 8",
        status: "Completed",
        assignedTo: "John Doe",
      },
    ],
    tags: ["UI/UX", "Design"],
    color: "blue.100",
  },
];

export default Projects;
