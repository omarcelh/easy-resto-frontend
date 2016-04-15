app.controller('kasirController', function($scope, pesananService, menuService, statistikService) {
	$scope.pesanan = [];
	$scope.menu = [];
	$scope.statistik = {
		labels: null,
		series: null,
		data: null
	};
	$scope.singleMenu = {
		nama: null,
		harga: null
	}
	$scope.isShown = false;
	
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
	
	$scope.addMenu = function(singleMenu){
		menuService.addMenu(singleMenu).then(function(res){
			isShown = false;
			getMenu();
		});
	};
	
	$scope.editMenu = function(singleMenu){
		menuService.addMenu(singleMenu).then(function(res){
			isShown = false;
		});
	};
	
	$scope.deleteMenu = function(menuId){
		if (confirm('Apakah Anda yakin menghapus menu ' + menuId + '?')) {
			menuService.deleteMenu(menuId).then(function(res){
				getMenu();
			});
		}
	};
	
	$scope.getStatistik = function(jenis, awal, akhir){
		statistikService.getStatistik(jenis, awal, akhir).then(function(res){			
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
		});
	};
	
	$scope.showMenu = function(){
		$scope.isShown = !$scope.isShown;
	}
	
	$scope.showEditMenu = function(menuId){
		
	}
});


