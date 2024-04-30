import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/UserModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "only SET are allowed" });
    return;
  }

  console.log("Request Body:", req.body);
  const { email, role } = req.body;
  console.log(email + " " + role + " ");

  try {
    await connectMongoDB();
    await User.create({ email, role });
    return res.send("Date saved");
  } catch (err) {
    console.log(err);
    res.status(403).send({ err, msg: "only POST req are allowes" });
  }
}
