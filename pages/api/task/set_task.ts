import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/TaskModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "only SET are allowed" });
    return;
  }

  console.log("Request Body:", req.body);
  const {
    taskName,
    description,
    status,
    assignedTo,
    startDate,
    dueDate,
    createdBy,
    tags,
    priority,
    dependencies,
  } = req.body;
  console.log(
    description,
    status,
    assignedTo,
    startDate,
    dueDate,
    createdBy,
    tags,
    dependencies,
    priority
  );
  try {
    await connectMongoDB();
    await Task.create({
      taskName,
      description,
      status,
      assignedTo,
      startDate,
      dueDate,
      createdBy,
      tags,
      dependencies,
      priority,
    });
    console.log(
      taskName +
        " " +
        description +
        " " +
        status +
        " " +
        assignedTo +
        " " +
        startDate +
        " " +
        dueDate +
        " " +
        createdBy +
        " " +
        tags +
        " " +
        dependencies +
        " " +
        priority
    );
    return res.send("Data saved");
  } catch (err) {
    console.log(err);
    res.status(403).send({ err, msg: "only POST req are allowes" });
  }
}
