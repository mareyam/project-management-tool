import mongoose, { Schema, model, models } from "mongoose";

//add schema typee
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: false,
      unique: false,
    },
    role: {
      type: String,
      required: false,
    },
    password: {
      type: String,
    },
    tasks: {
      type: [String],
      required: false,
    },
    projects: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
