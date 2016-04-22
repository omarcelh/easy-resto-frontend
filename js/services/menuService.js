app.factory('menuService', function($http, $q) {
    var factory = {};
    var menuEndpoint = 'http://167.205.34.83:5555/api/v1/menu/';
	
	var getEndpoint = function(menuId){
		return menuEndpoint + menuId;
	}
	
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
	
	factory.addMenu = function(dat){
		var deferred = $q.defer();

		var req = {
			nama: dat.nama,
			harga: dat.harga
		};

        $http({
            method: 'POST',
            url: menuEndpoint,
            data: req
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
	}
	
	factory.deleteMenu = function(menuId){
		var deferred = $q.defer();

        $http({
            method: 'DELETE',
            url: getEndpoint(menuId)
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
	}
	
	return factory;
});


