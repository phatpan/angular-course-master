var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('PromiseController', function ($timeout, $scope) {
	$scope.value = "Hello world"

	$timeout(function() {
		$scope.value = "Hello AngularJS!";
		$timeout(function() {
			$scope.value = "Hello EmberJS!";
			$timeout(function() {
				$scope.value = "Hello KnockoutJS!";
			}, 3000);
		}, 3000);
	}, 3000);
});

angular.module('myApp').controller('ModalController', function($scope, $uibModal) {
	$scope.open = function() {
		var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 500,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
	}
});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.ok = function () {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
