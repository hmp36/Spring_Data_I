myApp.factory("answerFactory", function($location, $sessionStorage, $http){
	var factory = {}
	
	factory.submitAnswer = function(obj, cb) {
		$http.post("/submit_answer", obj).success(function(success_info){
			console.log(success_info)
			cb()
		})
	}

	factory.like = function(id, cb) {
		$http.post("/like", {id: id}).success(function(info){
			cb()
		})
	}

	
	return factory
})