angular = require('angular')

puntersBotApp = angular.module('PuntersBotApp', [
  'ngRoute',
   require('./filters.coffee'),
   require('./directives.coffee'),
   require('./controllers.coffee')
])

puntersBotApp.config ['$routeProvider', ($routeProvider) ->
  $routeProvider.when('/index', {templateUrl: 'assets/partials/homepage.html', controller: 'HomeController'})
  $routeProvider.when('/simulation', {templateUrl: 'assets/partials/simulation.html', controller: 'SimulationController'})
  $routeProvider.otherwise({redirectTo: '/index'})
 ]

module.exports = puntersBotApp 
