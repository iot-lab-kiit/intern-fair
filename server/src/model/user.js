const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  Courses: [
    {
      courseId: { type: Schema.Types.ObjectId, ref: "Course" },
      progress: { type: Number, default: 0 },
      topicProg: [
        {
          topicId: { type: Schema.Types.ObjectId, ref: "Topic" },
          score: { type: Number, default: 0 },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
