const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    questions: [
        {
            question: {
                type: String,
                required: true,
            },
            options: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Option",
            },
        },
    ],
});

module.exports = mongoose.model("Assignment", assignmentSchema);
