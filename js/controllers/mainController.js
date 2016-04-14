app.controller('mainController', function($http, $rootScope, $scope) {
		$scope.pageTitle = 'EasyResto';
		
		$scope.init = function () {
				$rootScope.$on('pageTitle', function (event, val) {
						if (val) {
							$scope.pageTitle = val + ' | EasyResto';
						} else {
							$scope.pageTitle = 'EasyResto';
						}
				});
		};
});

