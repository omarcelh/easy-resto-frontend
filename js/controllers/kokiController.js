app.controller('kokiController', function($scope, pesananService) {
	$scope.pesanan = [];
	
	var getPesanan = function(){
		pesananService.getAllPesanan().then(function(res){
			$scope.pesanan = res;
		});
	};
	getPesanan();
});


