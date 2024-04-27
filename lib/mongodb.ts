import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined.");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return await mongoose.connect(process.env.MONGO_URI, {
    dbName: "project-management-tool",
  });
};

// export const connectMongoDB = async () => {
//   try {
//     const mongoURI = process.env.MONGO_URI;
//     if (!mongoURI) {
//       throw new Error("MONGO_URI environment variable is not defined");
//     }

//     await mongoose.connect(mongoURI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB:", error);
//   }
// };
