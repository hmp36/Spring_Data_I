'use strict';

angular.module('paizaqaApp')
  .controller('QuestionsCreateCtrl', function ($scope, $http, $location, Auth) {
    if(! Auth.isLoggedIn()){
      $location.path('/login');
      $location.replace();
      return;
    }
    $scope.submit = function() {
      $http.post('/api/questions', $scope.question)
      .then(function(res){
          $scope.questionsAnswered = res.data;
          console.log($scope.questionsAnswered);
        $location.path('/');
    }, function (err) {
        console.error(err);
    }
    };
  });
