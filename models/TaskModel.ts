import mongoose, { Schema } from "mongoose";

//add schema typee
const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },

    status: {
      type: String,
      required: false,
    },

    assignedTo: {
      type: String,
      required: false,
    },

    priority: {
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

    dependencies: {
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

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
