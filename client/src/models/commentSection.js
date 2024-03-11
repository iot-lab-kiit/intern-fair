import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  value: { type: String, required: true },
});

const commentSectionSchema = new Schema({
  topicId: {
    type: Schema.Types.ObjectId,
    ref: "Topic",
    required: true,
  },
  comments: [commentSchema],
});

export default mongoose.models.CommentSection ||
  model("CommentSection", commentSectionSchema);
