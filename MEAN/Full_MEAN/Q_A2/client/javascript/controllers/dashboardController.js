myApp.controller("dashboardController", function(userFactory, $scope, $location, questionFactory){

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

	// getting all questions for dashboard page
	questionFactory.getQuestions(function(data){
		$scope.all_questions = data
	})

	$scope.logout = function() {
		userFactory.logout()
	}



})