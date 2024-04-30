import mongoose, { Schema } from "mongoose";

//add schema type
const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      unique: false,
    },

    description: {
      type: String,
      required: false,
    },

    status: {
      type: String,
      required: false,
    },

    startDate: {
      type: Date,
      required: false,
    },

    dueDate: {
      type: Date,
      required: false,
    },

    createdBy: {
      type: String,
      required: false,
    },

    // teamMembers: {
    //   // type: [
    //   //   {memberName: String,
    //   //   },
    //   // ],
    //   required: false,
    // },

    teamMembers: [{ type: String }],

    // tasks: {
    //   type: [
    //     {
    //       taskId: String,
    //       taskName: String,
    //       status: String,
    //       assignedTo: String,
    //     },
    //   ],
    //   required: false,
    // },

    tasks: {
      type: [String],
      required: false,
    },

    tags: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
