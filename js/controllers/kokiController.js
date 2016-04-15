app.controller('kokiController', function($scope, pesananService) {
	$scope.pesanan = [];
	$scope.status = 'belum_diproses';
	
	var getPesanan = function(){
		pesananService.getAllPesanan($scope.status).then(function(res){
			$scope.pesanan = res;
		});
	};
	getPesanan();
	
	var updateStatusPesanan = function(pesananId, stat){
		stat = 'sudah_diproses';
		pesananService.updateStatusPesanan(pesananId, stat).then(function(res){
			getPesanan();
		});
	}
});

