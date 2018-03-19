myApp.controller("showController", function(userFactory, $scope, $location, questionFactory, $routeParams, answerFactory){

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

	// console.log($routeParams)
	//this is getting the initial question route - easier to do this after settiung up answers
	questionFactory.deepOneQuestion($routeParams, function(info){
		$scope.deepQuestion = info
	})

	$scope.like = function(ans_id) {
		console.log("hit")
		console.log(ans_id)
		answerFactory.like(ans_id, function() {

			questionFactory.deepOneQuestion($routeParams, function(info){
				$scope.deepQuestion = info
			})

		})
	}

	$scope.logout = function() {
		userFactory.logout()
	}




})