const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  description: { type: String, required: true },
  topics: [{ topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" } }],
  assignment: [
    {
      assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment" },
    },
  ],
  Comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Course", courseSchema);
