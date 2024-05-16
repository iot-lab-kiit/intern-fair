import { Schema, model } from "mongoose";

const assignmentSchema = new Schema(
  {
    courseid: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    questions: [
      {
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Assignment ||
  model("Assignment", assignmentSchema);
