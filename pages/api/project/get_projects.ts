import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/ProjectModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "ONLY GET method is allowed" });
    return;
  }

  try {
    await connectMongoDB();
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "something went wrong" });
  }
}
