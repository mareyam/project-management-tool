// pages/api/projects/get_project_data.ts

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/ProjectModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET requests are allowed" });
    return;
  }

  const { title } = req.query;
  const { _id } = req.query;
  console.log(_id);

  try {
    await connectMongoDB();
    const projectData = await Project.findOne({ title });

    if (!projectData) {
      res.status(404).send({ msg: "project not found" });
      return;
    }

    res.status(200).json(projectData);
  } catch (error) {
    console.error("Error fetching project data:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}
