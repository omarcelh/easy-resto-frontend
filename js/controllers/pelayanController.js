app.controller('pelayanController', function($scope, $interval, pesananService, menuService, mejaService) {
	$scope.pesanan = [];
	$scope.menu = [];
	$scope.meja = [];

	$scope.singlePesanan = {
		jenis: 'makan_di_tempat',
		status: 'belum_diproses',
		mejaId: 1,
		items: []
	};

	$scope.pesananToEdit = {
		id: null,
		jenis: null,
		status: null,
		mejaId: null,
		items: []
	};

	$scope.isShown = false;
	$scope.isEditShown = false;

	$scope.jenisPesanan = [
		{name: 'Makan di Tempat', value: 'makan_di_tempat'},
		{name: 'Bawa Pulang', value: 'bawa_pulang'}
	];

	$scope.removeMejaId = function() {
		$scope.singlePesanan.mejaId = null;
	}

	$scope.getStatusText = function(status) {
		switch (status) {
			case 'belum_diproses': return 'Belum Diproses';
			case 'sedang_dimasak': return 'Sedang Dimasak';
			case 'sudah_lengkap' : return 'Sudah Lengkap';
			case 'lunas': return 'Lunas';
		}
	};

	$scope.setEditing = function(pesanan) {
		$scope.isEditShown = true;
		$scope.pesananToEdit.id = pesanan.id;
		$scope.pesananToEdit.jenis = pesanan.jenis;
		$scope.pesananToEdit.status = pesanan.status;
		$scope.pesananToEdit.mejaId = (pesanan.meja[0] ? pesanan.meja[0].id : null);

		$scope.pesananToEdit.items = [];

		$scope.menu.map(function(menu) {
			$scope.pesananToEdit.items.push({id: menu.id, count: 0});
		});
		pesanan.items.map(function(item) {
			$scope.pesananToEdit.items[_.findIndex($scope.pesananToEdit.items, {id: item.id})].count = item.ItemPesanan.count;
		});

	}

	$scope.showPesanan = function(){
		$scope.isShown = !$scope.isShown;
	};

	$scope.showEditPesanan = function() {
		$scope.isEditShown = !$scope.isEditShown;
	}

	var getPesanan = function(){
		pesananService.getAllPesanan().then(function(res){
			var pesanan = [];
			res.map(function(pes) {
				if (pes.status !== 'lunas') {
					pesanan.push(pes);
				}
			});
			$scope.pesanan = pesanan;
		});
	};
	getPesanan();
	$interval(getPesanan, 8000);

	$scope.addPesanan = function(pesanan) {
		pesananService.addPesanan(pesanan).then(function(res) {
			getPesanan();
			$scope.isShown = false;

			$scope.singlePesanan = {
				jenis: 'makan_di_tempat',
				status: 'belum_diproses',
				mejaId: 1,
				items: []
			};
			$scope.menu.map(function(menu) {
				$scope.singlePesanan.items.push({id: menu.id, count: 0});
			});
		});
	}

	$scope.editPesanan = function(pesananToEdit){
		pesananService.editPesanan(pesananToEdit.id, pesananToEdit).then(function(res){
			getPesanan();
			$scope.isEditShown = false;

			$scope.pesananToEdit = {
				id: null,
				jenis: null,
				status: null,
				mejaId: null,
				items: []
			};
			$scope.menu.map(function(menu) {
				$scope.singlePesanan.items.push({id: menu.id, count: 0});
			});

		});
	}

	var getMenu = function(){
		menuService.getAllMenu().then(function(res){
			res.map(function(menu) {
				$scope.singlePesanan.items.push({id: menu.id, count: 0});
			});
			$scope.menu = res;
		});
	};
	getMenu();

	var getMeja = function(){
		mejaService.getAllMeja().then(function(res){
			$scope.meja = res;
		});
	};
	getMeja();
})
.constant('_', window._)
// use in views, ng-repeat="x in _.range(3)"
.run(function ($rootScope) {
	 $rootScope._ = window._;
});
