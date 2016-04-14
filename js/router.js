app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
        url: '/',
        templateUrl: '/loginPage.html',
        controller: 'loginController'
    })
    .state('pelayan', {
        url: '/pelayan',
        templateUrl: '/template/pelayan/olahPesanan.html',
        controller: 'pelayanController'
    })
    .state('kasir', {
        url: '/kasir',
        templateUrl: '/template/kasir/home.html',
        controller: 'kasirController'
    })
    .state('koki', {
        url: '/koki',
        templateUrl: '/template/koki/home.html',
        controller: 'kokiController'
    })
});

