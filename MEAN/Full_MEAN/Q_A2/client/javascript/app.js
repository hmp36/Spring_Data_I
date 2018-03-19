var myApp = angular.module("myApp", ['ngRoute', 'ngStorage'])

myApp.config(function($routeProvider){
	$routeProvider
		.when("/index", {
			templateUrl: "partials/index.html"
		})

		.when("/", {
			templateUrl: "partials/dashboard.html"
		})

		.when("/new_question", {
			templateUrl: "partials/new_question.html"
		})

		.when("/question/:id", {
			templateUrl: "partials/show_question.html"
		})

		.when("/question/:id/new_answer", {
			templateUrl: "partials/answer_question.html"
		})

	
		.otherwise({
			redirectTo: "/index"
		})
})



