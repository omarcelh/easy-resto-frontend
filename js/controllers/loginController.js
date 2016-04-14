app.controller('loginController', function($rootScope, $scope, $state) {
	$rootScope.$broadcast('pageTitle', 'Login');
	
	var doLogin = function doLogin(email, password) {
		if(email == 'koki@oo.com' && password == 'koki'){
				$state.go('koki');
		} else if(email == 'pelayan@oo.com' && password == 'pelayan'){
				$state.go('pelayan');
		} else if(email == 'kasir@oo.com' && password == 'kasir'){
				$state.go('kasir');
		}
	};

	$scope.email = '';
	$scope.password = '';

	$scope.doLogin = doLogin;
});

