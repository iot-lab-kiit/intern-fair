import { Schema, model } from "mongoose";

const subtopicSchema = new Schema({
  name: { type: String, required: true },

  info: [
    {
      description: { type: String },
      videos: [{ type: String }],
    },
  ],
});

export default mongoose.models.SubTopic || model("SubTopic", subtopicSchema);
