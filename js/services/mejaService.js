app.factory('mejaService', function($http, $q) {
    var factory = {};
    var mejaEndpoint = 'http://167.205.34.83:5555/api/v1/meja/';
	
    factory.getAllMeja = function(){
		var deferred = $q.defer();

        $http({
            method: 'GET',
            url: mejaEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
	}
	return factory;
});

