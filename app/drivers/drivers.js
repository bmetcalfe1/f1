'use strict';

angular.module('myApp.drivers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers', {
    templateUrl: 'drivers/drivers.html',
    controller: 'driversCtrl'
  });
}])

.controller('driversCtrl', [function() {

}]);
