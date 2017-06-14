var app = angular.module('myApp', []);

app.controller('RegisterController', function ($scope) {
	$scope.register = function() {
    console.log("register success");
  }
});
