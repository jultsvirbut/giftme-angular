export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('gift', {
      url: '/gifts',
      templateUrl: 'app/gifts/gifts.html',
      controller: 'GiftsController',
      controllerAs: 'gift'
    });

  $urlRouterProvider.otherwise('/');
}
