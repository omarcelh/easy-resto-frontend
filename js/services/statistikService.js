app.factory('statistikService', function($http, $q) {
    var factory = {};
    var statistikEndpoint = 'http://localhost:5555/api/v1/statistik/';
	
    var getStatistikEndpoint = function(type){
		return statistikEndpoint + type;
	}
	
	factory.getStatistik = function(jenis, awal, akhir) {
        var deferred = $q.defer();
        
        $http({
            method: 'GET',
            url: getStatistikEndpoint(jenis)
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });
        
        return deferred.promise;
    };
    
    return factory;
});

