import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/ProjectModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "PUT") {
    res.status(405).send({ msg: "ONLY PUT method is allowed" });
    return;
  }
  const {
    title,
    description,
    teamMembers,
    status,
    startDate,
    dueDate,
    createdBy,
    tasks,
    tags,
  } = req.body;
  console.log("Request Body:", req.body);
  console.log(
    title +
      " " +
      description +
      " " +
      teamMembers +
      " " +
      status +
      " " +
      startDate +
      " " +
      dueDate +
      " " +
      createdBy +
      " " +
      tasks +
      " " +
      tags
  );

  try {
    await connectMongoDB();
    const project = await Project.findOne({ title });
    console.log("project in put_project is " + project);

    if (!project) {
      res.status(404).send({ msg: "project not found" });
      console.log("not found in put_project is " + project);
      return;
    }

    const updatedProject = await Project.findOneAndUpdate(
      { title },
      // { $set: req.body },
      {
        $set: {
          description,
          teamMembers,
          status,
          startDate,
          dueDate,
          createdBy,
          tasks,
          tags,
        },
      },
      { new: true }
    );
    console.log(" put_project is " + updatedProject);
    res.status(200).send(updatedProject);
  } catch (err) {
    console.error(err);
    console.log(" error is " + err);
    res.status(400).send({ err, msg: "Something went wrong" });
  }
}

// export default async function handler(req: any, res: any) {
//   if (req.method !== "PUT") {
//     res.status(405).send({ msg: "ONLY PUT method is allowed" });
//     return;
//   }

//   const { _id, projects, tasks } = req.body;
//   console.log("Request Body:", req.body);
//   console.log(_id + " " + projects + " " + tasks);

//   try {
//     await connectMongoDB();
//     const user = await Project.findOne({ _id });

//     if (!user) {
//       res.status(404).send({ msg: "User not found" });
//       return;
//     }

//     const updatedProjects = [
//       ...user.projects,
//       ...projects.filter((project: string) => !user.projects.includes(project)),
//     ];
//     const updatedTasks = [
//       ...user.tasks,
//       ...tasks.filter((task: string) => !user.tasks.includes(task)),
//     ];

//     const updatedUser = await Project.findOneAndUpdate(
//       { _id },
//       { $set: { projects: updatedProjects, tasks: updatedTasks } },
//       { new: true }
//     );

//     res.status(200).send(updatedUser);
//   } catch (err) {
//     console.error(err);
//     res.status(400).send({ err, msg: "Something went wrong" });
//   }
// }

// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/UserModel";

// export default async function handler(req: any, res: any) {
//   if (req.method !== "PUT") {
//     res.status(405).send({ msg: "ONLY PUT method is allowed" });
//     return;
//   }

//   const { email, projects, tasks } = req.body;
//   console.log("Request Body:", req.body);
//   console.log(email + "" + projects + " " + tasks + " ");

//   try {
//     await connectMongoDB();
//     const user = await User.findOneAndUpdate(
//       { email },
//       { projects, tasks },
//       { new: true }
//     );
//     res.status(200).send(user);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ err, msg: "something went wrong" });
//   }
// }

//
//
//
//
//
//
//
//
//
//

// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/UserModel";

// export default async function handler(req: any, res: any) {
//   if (req.method !== "PUT") {
//     res.status(405).send({ msg: "ONLY PUT method is allowed" });
//     return;
//   }

//   console.log("Request Body:", req.body);
//   const { email, projects, tasks } = req.body;
//   console.log(email + "" + projects + " " + tasks + " ");

//   try {
//     await connectMongoDB();
//     const users = await User.findByIdAndUpdate({
//       email,
//       projects,
//       tasks,
//     });
//     res.status(200).send(users);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ err, msg: "something went wrong" });
//   }
// }
