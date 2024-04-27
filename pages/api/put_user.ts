import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/UserModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "PUT") {
    res.status(405).send({ msg: "ONLY PUT method is allowed" });
    return;
  }

  const { email, projects, tasks } = req.body;
  console.log("Request Body:", req.body);
  console.log(email + " " + projects + " " + tasks);

  try {
    await connectMongoDB();
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({ msg: "User not found" });
      return;
    }

    const updatedProjects = [
      ...user.projects,
      ...projects.filter((project: string) => !user.projects.includes(project)),
    ];
    const updatedTasks = [
      ...user.tasks,
      ...tasks.filter((task: string) => !user.tasks.includes(task)),
    ];

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { projects: updatedProjects, tasks: updatedTasks } },
      { new: true }
    );

    res.status(200).send(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(400).send({ err, msg: "Something went wrong" });
  }
}

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
