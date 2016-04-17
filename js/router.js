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
        templateUrl: '/template/pelayan/home.html',
        controller: 'pelayanController'
    })
    .state('kasir', {
        url: '/kasir',
        templateUrl: '/template/kasir/home.html',
        controller: 'kasirController'
    })
    .state('kasirStatistik', {
        url: '/kasir/statistik',
        templateUrl: '/template/kasir/statistik.html',
        controller: 'statistikController'
    })
    .state('kasirMenu', {
        url: '/kasir/menu',
        templateUrl: '/template/kasir/menu.html',
        controller: 'kasirController'
    })
    .state('koki', {
        url: '/koki',
        templateUrl: '/template/koki/home.html',
        controller: 'kokiController'
    })
});
