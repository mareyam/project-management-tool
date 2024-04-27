export default async function handler(req: any, res: any) {
  if (!res) {
    console.error("Response object is undefined");
    return;
  }

  res.status(201).send("hi theree");
}

export default async function handler({ req, res }: any) {
  res.status(201).send("hi there");

  //   if (req.method !== "POST") {
  //     res.status(405).send({ msg: "only posts are allowed" });
  //     return;
  //   }
  //   const { user } = req.body;
  //   try {
  //     await connectMongoDB();
  //     UserModel.create({ user }).then((data) => {
  //       console.log(data);
  //       res.status(201).send(data);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).send({ err, msg: "something went wrong" });
  //   }
}
