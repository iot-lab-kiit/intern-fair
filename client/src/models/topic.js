import { Schema, model } from "mongoose";

const topicSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  subTopics: [{ subTopicId: { type: Schema.Types.ObjectId, ref: "SubTopic" } }],
});

export default Mongoose.models.Topic || model("Topic", topicSchema);
