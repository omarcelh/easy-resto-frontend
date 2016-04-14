app.factory('menuService', function($http, $q) {
    var factory = {};
    var menuEndpoint = 'http://localhost:5555/api/v1/menu/';
	
    factory.getAllMenu = function(){
		var deferred = $q.defer();

        $http({
            method: 'GET',
            url: menuEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
	}
	return factory;
});


