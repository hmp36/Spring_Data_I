var mongoose = require("mongoose")
var Schema = mongoose.Schema
var deepPopulate = require('mongoose-deep-populate')(mongoose)


var userSchema = new mongoose.Schema({
	username: String,
	questions: [{type: Schema.Types.ObjectId, ref: "Question"}],
	// posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
	// comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})
mongoose.model("User", userSchema)

var questionSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	question: String,
	description: String,
	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
})
mongoose.model("Question", questionSchema)
questionSchema.plugin(deepPopulate) 

var answerSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	answer: String,
	supporting: String,
	_question: {type: Schema.Types.ObjectId, ref: "Answer"},
	like: {type: Number, default: 0}
})
mongoose.model("Answer", answerSchema)
