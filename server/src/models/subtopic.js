const mongoose = require("mongoose");

const subtopicSchema = new mongoose.Schema({
    subtopicName: {
        type: String,
        required: true,
    },
    info: [
        {
            description: {
                type: String,
            },
            videos: [
                {
                    type: String,
                },
            ],
        },
    ],
});

module.exports = mongoose.model("SubTopic", subtopicSchema);
