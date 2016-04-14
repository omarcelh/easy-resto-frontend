app.controller('pelayanController', function($scope, pesananService, menuService, mejaService) {
	$scope.pesanan = [];
	$scope.menu = [];
	$scope.meja = [];
	
	var getPesanan = function(){
		pesananService.getAllPesanan().then(function(res){
			$scope.pesanan = res;
		});
	};
	getPesanan();
	
	var getMenu = function(){
		menuService.getAllMenu().then(function(res){
			$scope.menu = res;
		});
	};
	getMenu();
	
	var getMeja = function(){
		mejaService.getAllMeja().then(function(res){
			$scope.meja = res;
		});
	};
	getMeja();
});


