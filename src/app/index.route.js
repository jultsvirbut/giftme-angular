export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/gifts/gifts.html',
      controller: 'GiftsController',
      controllerAs: 'gift'
      })
    .state('example', {
      url: '/example',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('app', {
      abstract: true,
      url: '',
      templateUrl: 'app/gifts/app.html'
    })
    .state('app.contacts', {
      url: '/contacts',
      templateUrl: 'app/gifts/contacts.html'
    })
    .state('app.gifts', {
      url: '/gifts',
      templateUrl: 'app/gifts/gifts.html',
      controller: 'GiftsController',
      controllerAs: 'gift'
    });

  $urlRouterProvider.otherwise('/');
}
