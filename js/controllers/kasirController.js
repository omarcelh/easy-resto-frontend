app.controller('kasirController', function($scope, pesananService, menuService, statistikService) {
	$scope.pesanan = [];
	$scope.menu = [];
	$scope.statistik = {
		labels: null,
		series: null,
		data: null
	};
	
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
	
	$scope.getStatistik = function(jenis, awal, akhir){
		statistikService.getStatistik(jenis, awal, akhir).then(function(res){			
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
		});
	};
});


