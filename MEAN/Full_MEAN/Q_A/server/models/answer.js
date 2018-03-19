const mongoose = require("mongoose");
const likesPlugin = require('mongoose-likes');
const autopopulate = require('mongoose-autopopulate');

const AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, "Answer must be at leart 5 characters"],
        minlength: [5, "Answer must be at leart 5 characters"]
    },
    detail: {
        type: String
    },
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Question",
        autopopulate: true
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    },
}, { timestamps: true });

AnswerSchema.plugin(likesPlugin);
AnswerSchema.plugin(autopopulate);

const Answer = mongoose.model("Answer", AnswerSchema);