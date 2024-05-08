import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/models/TaskModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "PUT") {
    res.status(405).send({ msg: "ONLY PUT method is allowed" });
    return;
  }

  const {
    _id,
    taskName,
    description,
    status,
    startDate,
    dueDate,
    createdBy,
    assignedTo,
    tagList,
    dependencies,
    priority,
  } = req.body;
  console.log("Request Body:", req.body);
  console.log(
    taskName +
      " " +
      description +
      " " +
      status +
      " " +
      startDate +
      " " +
      dueDate +
      " " +
      createdBy +
      " " +
      assignedTo +
      " " +
      tagList +
      " " +
      dependencies +
      " " +
      priority
  );

  try {
    await connectMongoDB();
    const task = await Task.findOne({ _id });
    console.log("task in put_task is " + task);

    if (!task) {
      res.status(404).send({ msg: "task not found" });
      console.log("not found in put_task is " + task);
      return;
    }

    const updatedTags = [
      ...task.tags,
      ...tagList.filter((tag: string) => !task.tags.includes(tag)),
    ];

    const updatedDependencies = [
      ...task.dependencies,
      ...dependencies.filter(
        (dependency: string) => !task.dependencies.includes(dependency)
      ),
    ];

    const updatedTask = await Task.findOneAndUpdate(
      { _id: task._id },
      {
        taskName,
        description,
        status,
        startDate,
        dueDate,
        createdBy,
        assignedTo,
        tags: updatedTags,
        dependencies: updatedDependencies,
        priority,
      }
    );
    console.log(" put_task is " + updatedTask);
    res.status(200).send(updatedTask);
  } catch (err) {
    console.error(err);
    console.log(" error is " + err);
    res.status(400).send({ err, msg: "Something went wrong" });
  }
}
