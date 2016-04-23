app.controller('kasirController', function($scope, $state, $interval, pesananService, menuService, statistikService) {
	$scope.pesananSorter = {
		selected: 'sudah_lengkap',
		availableOptions: [
			{ name: 'Belum Diproses', value: 'belum_diproses'},
			{ name: 'Sedang Dimasak', value: 'sedang_dimasak'},
			{ name: 'Sudah Lengkap', value: 'sudah_lengkap'},
			{ name: 'Lunas', value: 'lunas'}
		]
	};

	$scope.pesanan = [];
	$scope.menu = [];
	$scope.singleMenu = {
		nama: null,
		harga: null
	}
	$scope.isShown = false;

	var getPesanan = function(status){
		pesananService.getAllPesanan(status).then(function(res){
			res.map(function(pesanan) {
				pesanan.tanggalBuat = new Date(pesanan.tanggalBuat).toLocaleString();
				pesanan.tanggalEdit = new Date(pesanan.tanggalEdit).toLocaleString();
				pesanan.jenis = pesanan.jenis.replace(/_/g, ' ');
			});
			$scope.pesanan = res;
		});
	};
	getPesanan($scope.pesananSorter.selected);
	$interval(function() { getPesanan($scope.pesananSorter.selected)}, 8000);

	$scope.sortPesananBy = function(status) {
		getPesanan(status);
	}

	var getMenu = function(){
		menuService.getAllMenu().then(function(res){
			$scope.menu = res;
		});
	};
	getMenu();

	$scope.addMenu = function(singleMenu){
		menuService.addMenu(singleMenu).then(function(res){
			$scope.isShown = false;
			$scope.singleMenu.nama = '';
			$scope.singleMenu.harga = '';
			$scope.singleMenu.id = undefined;
			getMenu();
		});
	};

	$scope.deleteMenu = function(menuId){
		if (confirm('Apakah Anda yakin menghapus menu ' + menuId + '?')) {
			menuService.deleteMenu(menuId).then(function(res){
				getMenu();
			});
		}
	};

	$scope.showMenu = function(){
		$scope.isShown = !$scope.isShown;
	}
}).filter('titleCase', function() {
    return function (input) {
        var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

        input = input.toLowerCase();
        return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
            if (index > 0 && index + match.length !== title.length &&
                match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
                (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
                title.charAt(index - 1).search(/[^\s-]/) < 0) {
                return match.toLowerCase();
            }

            if (match.substr(1).search(/[A-Z]|\../) > -1) {
                return match;
            }

            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    };
	});
