myApp.controller("answerController", function(userFactory, $scope, $location, questionFactory, $routeParams, answerFactory){

	if(!userFactory.user()) {
		$location.url("/index") // sending user to login page if no session
	} else {
		$scope.currUser = userFactory.user() // getting user's name 
	}

	// getting user object using username
	userFactory.getUserObject($scope.currUser, function(data){ 
		$scope.currUserObject = data
		console.log("scope curruobj is", $scope.currUserObject)
	})
	$scope.question_id = $routeParams

	console.log($routeParams)
	questionFactory.getOneQuestionForAnswerPage($routeParams, function(data) {
		$scope.questionInfo = data
	})

	$scope.submitAnswer = function(a_info) {
		// console.log(a_info)
		// console.log($routeParams)
		// console.log($scope.currUser)
		a_info.user_id = $scope.currUserObject._id
		a_info.q_id = $routeParams.id
		answerFactory.submitAnswer(a_info, function(){
			$location.url("/")
		})
	}

	$scope.logout = function() {
		userFactory.logout()
	}


})