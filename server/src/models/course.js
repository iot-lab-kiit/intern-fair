const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    topics: [
        {
            topicName: {
                type: String,
                required: true,
            },
            topicId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Topic",
            },
            subtopics: [
                {
                    subtopicName: {
                        type: String,
                        required: true,
                    },
                    subtopicId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "SubTopic",
                    },
                },
            ],
        },
    ],
    Assignments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment",
        },
    ],
    Comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CommentSection",
        },
    ],
});

module.exports = mongoose.model("Course", courseSchema);
