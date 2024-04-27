import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/UserModel";

export default async function handler(req: any, res: any) {
  if (req.method !== "DELETE") {
    res.status(405).send({ msg: "only DELETE are allowed" });
    return;
  }

  console.log("Request Body:", req.body);
  const { _id } = req.body;
  console.log(_id);

  if (!_id) {
    res.status(400).send({ msg: "_id is required for deletion" });
    return;
  }

  try {
    await connectMongoDB();
    const deletedUser = await User.findOneAndDelete({ _id });

    if (!deletedUser) {
      res.status(404).send({ msg: "User not found" });
      return;
    }

    res.status(200).send(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(403).send({ err, msg: "only POST req are allowes" });
  }
}
