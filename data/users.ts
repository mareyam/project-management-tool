const UserData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://source.unsplash.com/200x200/?avatar&john_doe",
    tasks: [
      { taskId: "TSK1", taskName: "Task 1", projectId: "PRJ1" },
      { taskId: "TSK2", taskName: "Task 2", projectId: "PRJ2" },
    ],
    projects: [
      { projectId: "PRJ1", projectName: "Project A" },
      { projectId: "PRJ2", projectName: "Project B" },
    ],
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice@example.com",
    avatar: "https://source.unsplash.com/200x200/?avatar&alice_smith",
    tasks: [
      { taskId: "TSK3", taskName: "Task 3", projectId: "PRJ2" },
      { taskId: "TSK4", taskName: "Task 4", projectId: "PRJ3" },
    ],
    projects: [
      { projectId: "PRJ2", projectName: "Project B" },
      { projectId: "PRJ3", projectName: "Project C" },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    avatar: "https://source.unsplash.com/200x200/?avatar&bob_johnson",
    tasks: [
      { taskId: "TSK5", taskName: "Task 5", projectId: "PRJ1" },
      { taskId: "TSK6", taskName: "Task 6", projectId: "PRJ3" },
    ],
    projects: [
      { projectId: "PRJ1", projectName: "Project A" },
      { projectId: "PRJ3", projectName: "Project C" },
    ],
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
    avatar: "https://source.unsplash.com/200x200/?avatar&emily_brown",
    tasks: [
      { taskId: "TSK7", taskName: "Task 7", projectId: "PRJ4" },
      { taskId: "TSK8", taskName: "Task 8", projectId: "PRJ4" },
    ],
    projects: [{ projectId: "PRJ4", projectName: "Project D" }],
  },
  {
    id: 5,
    name: "Michael Lee",
    email: "michael@example.com",
    avatar: "https://source.unsplash.com/200x200/?avatar&michael_lee",
    tasks: [
      { taskId: "TSK9", taskName: "Task 9", projectId: "PRJ5" },
      { taskId: "TSK10", taskName: "Task 10", projectId: "PRJ5" },
    ],
    projects: [{ projectId: "PRJ5", projectName: "Project E" }],
  },
];

export default UserData;
