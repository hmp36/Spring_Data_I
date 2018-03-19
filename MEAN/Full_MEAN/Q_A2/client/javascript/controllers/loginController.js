myApp.controller("loginController", function(userFactory, $scope, $location){


	$scope.enter = function(username) {
		console.log(username)
		userFactory.login_user(username)
	}

	$scope.logout = function() {
		userFactory.logout()
	}


})