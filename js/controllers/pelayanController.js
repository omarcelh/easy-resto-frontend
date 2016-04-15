app.controller('pelayanController', function($scope, pesananService, menuService, mejaService) {
	$scope.pesanan = [];
	$scope.menu = [];
	$scope.meja = [];
	$scope.singlePesanan = {
		id: null,
		jenis: null,
		status: null,
		items: []
	};
	
	$scope.isShown = false;
	
	$scope.showPesanan = function(){
		$scope.isShown = !$scope.isShown;
	};
	
	var getPesanan = function(){
		pesananService.getAllPesanan().then(function(res){
			$scope.pesanan = res;
		});
	};
	getPesanan();
	
	var editPesanan = function(pesananId, singlePesanan){
		pesananService.editPesanan(pesananId, singlePesanan).then(function(res){
			getPesanan();
		});
	}
	
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


