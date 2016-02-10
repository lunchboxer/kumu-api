angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '',
        templateUrl: 'views/welcome.html'
      });

    $urlRouterProvider.otherwise('welcome');
  }]);
