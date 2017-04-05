'use strict';

angular.module('myApp.drivers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers', {
    templateUrl: 'drivers/drivers.html',
    controller: 'driversCtrl'
  });
}])

.controller('driversCtrl', function($http, $scope) {
  $scope.nameFilter;
  $scope.driversList = [];

  $http({
    method: 'JSONP',
    url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
  })
  .then(function(response) {
    $scope.driversList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });

  $scope.searchFilter = function (driver) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
  };
});
