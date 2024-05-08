import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/ProjectModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "only SET are allowed" });
    return;
  }

  console.log("Request Body:", req.body);
  const {
    title,
    description,
    status,
    createdBy,
    teamMembers,
    startDate,
    priority,
    dueDate,
    tags,
    tasks,
  } = req.body;
  console.log(
    title +
      " " +
      description +
      " " +
      status +
      " " +
      createdBy +
      " " +
      teamMembers +
      " " +
      startDate +
      " " +
      dueDate +
      " " +
      tags +
      " " +
      tasks
  );

  try {
    await connectMongoDB();
    await Project.create({
      title,
      description,
      status,
      createdBy,
      teamMembers,
      startDate,
      dueDate,
      priority,
      tags,
      tasks,
    });
    console.log(res);
    return res.send("Date saved");
  } catch (err) {
    console.log(err);
    res.status(403).send({ err, msg: "only POST req are allowes" });
  }
}
