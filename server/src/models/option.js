const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    answer: [
        {
            correct: Boolean,
            name: String,
        },
    ],
});

module.exports = mongoose.model("Option", optionSchema);
