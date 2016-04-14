app.controller('kasirController', function($scope, kasirService) {
	$scope.pesanan = [];
	
	var getPesanan = function(){
		kasirService.getAllPesanan().then(function(res){
			$scope.pesanan = res;
			console.log($scope.pesanan);
		});
	}
	getPesanan();
	
	$(document).ready(function(){
		$('#tabelMenu').DataTable({
			bPaginate: false
		});
	});
});


