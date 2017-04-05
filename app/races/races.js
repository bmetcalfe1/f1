'use strict';

angular.module('myApp.races', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/races', {
    templateUrl: 'races/races.html',
    controller: 'racesCtrl'
  });
}])

.controller('racesCtrl', [function() {

}]);
