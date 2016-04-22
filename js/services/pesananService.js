app.factory('pesananService', function($http, $q) {
    var factory = {};
    var pesananEndpoint = 'http://167.205.34.83:5555/api/v1/pesanan/';

    var getPesananEndpoint = function(pesananId) {
        return pesananEndpoint + pesananId;
    }

    factory.getAllPesanan = function(status) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: pesananEndpoint,
            params: {status: status}
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    factory.addPesanan = function(dat) {
        var deferred = $q.defer();

        //kode_ruangan, kapasitas, status_kondisi
        $http({
            method: 'POST',
            url: pesananEndpoint,
            data: dat,
            dataType: 'json'
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    factory.editPesanan = function(pesananId, dat) {
        var deferred = $q.defer();

        $http({
            method: 'PUT',
            url: getPesananEndpoint(pesananId),
            data: dat,
            dataType: 'json'
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    factory.updateStatusPesanan = function(pesananId, stat) {
		var deferred = $q.defer();

        var req = {
			      status: stat
        };

        $http({
            method: 'PUT',
            url: getPesananEndpoint(pesananId),
            data: req,
            dataType: 'json'
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
	}

    factory.deletePesanan = function(pesananId) {
        var deferred = $q.defer();

        $http({
            method: 'DELETE',
            url: getPesananEndpoint(pesananId)
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    return factory;
});
