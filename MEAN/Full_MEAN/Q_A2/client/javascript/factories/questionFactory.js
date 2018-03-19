myApp.factory("questionFactory", function($location, $sessionStorage, $http){
	var factory = {}
	
	factory.submitQuestion = function(info, cb) {
		$http.post("/submit_question", info).success(function(msg){
			console.log(msg)
			cb()
		})
	}

	//function to get all questions when the user gets to the dashboard
	factory.getQuestions = function(cb) {
		$http.get("get_questions").success(function(data){
			cb(data)
		})
	}

	// getting the one question you want when you click answer - need only question details back
	factory.getOneQuestionForAnswerPage = function(id, cb) {
		$http.post("get_one_question_for_new_answer", id).success(function(data){
			cb(data)
		})
	}

	//getting the deep question
	factory.deepOneQuestion = function(id, cb) {
		$http.post("/deep_question", id).success(function(data){
			cb(data)
		})
	}

	
	return factory
})