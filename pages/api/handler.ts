export default async function handler(req: any, res: any) {
  if (!res) {
    console.error("Response object is undefined");
    return;
  }

  res.status(201).send("hi theree");
}
