app.factory('pesananService', function($http, $q) {
    var factory = {};
    var pesananEndpoint = 'http://localhost:5555/api/v1/pesanan/';
	
    var getPesananEndpoint = function(pesananId) {
        return pesananEndpoint + pesananId;
    }

    factory.getAllPesanan = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: pesananEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    factory.addPesanan = function(dat) {
        var deferred = $q.defer();

        var req = {
            anak: dat.anak,
            kartuKeluargaId: dat.kartuKeluargaId,
            aktaNikah: dat.aktaNikahId,
            ibuId: dat.ibuId,
            ayahId: dat.ayahId,
            saksiSatu: dat.saksiSatu,
            saksiDua: dat.saksiDua,
            pemohonId: dat.pemohonId,
            waktuCetak : dat.waktuCetakTerakhir,
            instansiKesehatanId :dat.instansiKesehatanId

        };
        console.log(req);

        //kode_ruangan, kapasitas, status_kondisi
        $http({
            method: 'POST',
            url: pesananEndpoint,
            data: req,
            dataType: 'json',
            withCredentials: true,
            beforeSend: function(xhr){
                var auth = localStorage.getItem('ls.auth');
                console.log(localStorage);
                xhr.setRequestHeader('Authorization', auth.substring(1,auth.length - 1));
            }

        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    factory.editPesanan = function(pesananId, dat) {
        var deferred = $q.defer();

        var req = {
            anak: dat.anak,
            kartuKeluargaId: dat.kartuKeluarga,
            aktaNikah: dat.aktaNikah,
            ibu: dat.ibu,
            ayah: dat.ayah,
            saksi1: dat.saksi1,
            saksi2: dat.saksi2,
            pemohonId: dat.pemohonId,
            waktuCetak : dat.waktuCetak

        };

        $http({
            method: 'PATCH',
            url: getPesananEndpoint(pesananId),
            data: req,
            dataType: 'json',
            withCredentials: true,
            beforeSend: function(xhr){
                var auth = localStorage.getItem('ls.auth');
                console.log(localStorage);
                xhr.setRequestHeader('Authorization', auth.substring(1,auth.length - 1));
            }
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


