const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    topicName: {
        type: String,
        required: true,
    },
    subTopics: [
        {
            subTopicId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTopic",
            },
        },
    ],
});

module.exports = mongoose.model("Topic", topicSchema);
