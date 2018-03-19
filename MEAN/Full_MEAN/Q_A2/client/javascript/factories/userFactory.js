myApp.factory("userFactory", function($location, $sessionStorage, $http){
	var factory = {}
	
	$sessionStorage.currUser; 

	factory.logout = function() { // logging out of a session
		$sessionStorage.currUser = ""
		$location.url("/")
	}


	factory.login_user = function(info) { // logging user in/obtaining session info initially
		$http.post("/login_user", {username: info}).success(function(user_info){
			console.log(user_info)
			$sessionStorage.currUser = info
			$location.url("/")
		})
	}

	factory.getUserObject = function(name, cb) { // getting all info of the user based on username
		$http.post("/get_user_obj", {username: name}).success(function(info) {
			cb(info)
		})
	}

	factory.user = function() { // each factory grabbing the user's name from the sessionStorage
		return $sessionStorage.currUser
	}

	
	return factory
})