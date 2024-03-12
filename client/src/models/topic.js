import { Schema, model } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timeseries: true }
);

export default Mongoose.models.Topic || model("Topic", topicSchema);
