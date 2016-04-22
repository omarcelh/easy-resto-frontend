app.factory('statistikService', function($http, $q) {
    var factory = {};
    var statistikEndpoint = 'http://167.205.34.83:5555/api/v1/statistik/';

    var getStatistikEndpoint = function(type){
		return statistikEndpoint + type;
	}

	factory.getStatistik = function(jenis, awal, akhir) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: getStatistikEndpoint(jenis),
            params: {
              startDate: new Date(awal).toJSON().split('T')[0],
              date: new Date(akhir).toJSON().split('T')[0],
              endDate: new Date(akhir).toJSON().split('T')[0],
            }
        }).success(function(data) {
            data.data = [data.data];
            if (data.labels.length === 0) data.labels.push('NO DATA');
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return factory;
});
