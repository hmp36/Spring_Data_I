const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question must be at least 10 characters"],
        minlength: [10, "Question must be at least 10 characters"]
    },
    description: {
        type: String
    },
    _answer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
    }],
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    }
    
}, { timestamps: true });

QuestionSchema.plugin(autopopulate);

const Question = mongoose.model("Question", QuestionSchema);