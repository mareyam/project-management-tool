// pages/api/tasks/get_task_data.ts

import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/TaskModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET requests are allowed" });
    return;
  }

  const { taskName } = req.query;
  const { _id } = req.query;
  console.log(taskName + " " + _id);

  try {
    await connectMongoDB();
    const taskData = await Task.findOne({ taskName });

    if (!taskData) {
      res.status(404).send({ msg: "task not found" });
      return;
    }

    res.status(200).json(taskData);
  } catch (error) {
    console.error("Error fetching task data:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}
