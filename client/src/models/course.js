import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  courseName: { type: String, required: true },
  description: { type: String, required: true },
  topics: [{ topicId: { type: Schema.Types.ObjectId, ref: "Topic" } }],
  assignment: [
    {
      assignmentId: { type: Schema.Types.ObjectId, ref: "Assignment" },
    },
  ],
  Comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

export default mongoose.models.Course || model("Course", courseSchema);
