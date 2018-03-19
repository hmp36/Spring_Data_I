myApp.controller("new_questionController", function(userFactory, $scope, $location, questionFactory){

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


	$scope.submitQuestion = function(q_info) {
		console.log(q_info)
		console.log($scope.currUserObject)
		q_info.userid = $scope.currUserObject._id
		questionFactory.submitQuestion(q_info, function(){
			$location.url("/")
		})
	}

	$scope.logout = function() {
		userFactory.logout()
	}



})