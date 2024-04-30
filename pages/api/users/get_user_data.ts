// pages/api/users/get_user_data.ts

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/UserModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET requests are allowed" });
    return;
  }

  const { email } = req.query;

  try {
    await connectMongoDB();
    const userData = await User.findOne({ email });

    if (!userData) {
      res.status(404).send({ msg: "User not found" });
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}
