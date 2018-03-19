var users = require("./../controllers/users.js")
var questions = require("./../controllers/questions.js")
var answers = require("./../controllers/answers.js")

module.exports = function(app) {

	app.post("/login_user", function(req, res) {
		users.login_user(req, res)
	})

	app.post("/get_user_obj", function(req, res) {
		users.get_user_obj(req, res)
	})

	app.post("/submit_question", function(req, res){
		questions.create(req, res)
	})

	app.get("/get_questions", function(req, res) {
		questions.get_questions(req, res)
	})

	app.post("/get_one_question_for_new_answer", function(req, res) {
		questions.get_one_question_for_new_answer(req, res)
	})

	app.post("/submit_answer", function(req, res){
		answers.submitAnswer(req, res)
	})

	app.post("/deep_question", function(req, res) {
		questions.deepQuestion(req, res)
	})

	app.post("/like", function(req, res) {
		answers.like(req, res)
	})

}