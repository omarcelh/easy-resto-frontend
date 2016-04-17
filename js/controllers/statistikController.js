app.controller('statistikController', function($scope, statistikService) {
  var today = new Date();
  var lastYear = new Date(); lastYear.setFullYear(lastYear.getFullYear() - 1);

  $scope.statistikOptions = {
    startDate: lastYear,
    endDate: today,
    filter: {
      selected: 'pemesanan',
      availableOptions: [
        { name: 'Pemesanan', value: 'pemesanan' },
        { name: 'Item', value: 'item' },
        { name: 'Hari', value: 'hari' }
      ]
    }
  };

  $scope.statistik = {
    labels: null,
    series: null,
    data: null
  };

	$scope.getStatistik = function(jenis, awal, akhir){
    if (jenis === 'hari') {
      awal = akhir;
    }
		statistikService.getStatistik(jenis, awal, akhir).then(function(res){
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
		});
	};

  $scope.filterStatistikBy = function(jenis) {
    $scope.getStatistik(jenis, $scope.statistikOptions.startDate, $scope.statistikOptions.endDate);
  };

  $scope.setStartDate = function(startDate) {
    $scope.getStatistik($scope.statistikOptions.filter.selected, startDate, $scope.statistikOptions.endDate);
  };

  $scope.setEndDate = function(endDate) {
    $scope.getStatistik($scope.statistikOptions.filter.selected, $scope.statistikOptions.startDate, endDate);
  };

  $scope.getStatistik($scope.statistikOptions.filter.selected, $scope.statistikOptions.startDate, $scope.statistikOptions.endDate);
});
