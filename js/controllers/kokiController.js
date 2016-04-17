app.controller('kokiController', function($scope, $interval, pesananService) {
	$scope.pesanan = [];

	var getPesanan = function(){
		pesananService.getAllPesanan('sedang_dimasak').then(function(res){
			res.map(function(pesanan) {
				pesanan.jenis = pesanan.jenis.replace(/_/g, ' ');
			});
			var pesanans = res;

			pesananService.getAllPesanan('belum_diproses').then(function(res) {
				$scope.pesanan = pesanans;
				res.map(function(pesanan) {
					pesanan.jenis = pesanan.jenis.replace(/_/g, ' ');
					$scope.pesanan.push(pesanan);
				});
			});
		});
	};

	getPesanan();
	$interval(getPesanan, 5000);

	$scope.updateStatusPesanan = function(pesanan, stat){
		pesananService.updateStatusPesanan(pesanan.id, stat).then(function(res){
			pesanan.status = stat;
			$interval(getPesanan, 2000, 1);
		});
	};

	$scope.getStatusText = function(status) {
		switch (status) {
			case 'belum_diproses': return 'Belum Diproses';
			case 'sedang_dimasak': return 'Sedang Dimasak';
			case 'sudah_lengkap' : return 'Sudah Lengkap';
			case 'lunas': return 'Lunas';
		}
	};
});
