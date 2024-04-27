// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
  console.log("hello");
}

import { NextResponse } from "next/server";

// export default async function POST(req: any) {
//   try {
//     const { email, password, confPassword } = await req.json();
//     console.log("email", email);
//     console.log("password", password);
//     console.log("confPassword", confPassword);

//     return NextResponse.json({ message: "User registered" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "an error occured" }, { status: 500 });
//   }
// }
