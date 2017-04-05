'use strict';

angular.module('myApp.drivers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers', {
    templateUrl: 'drivers/drivers.html',
    controller: 'driversCtrl'
  });
}])

.controller('driversCtrl', function($scope) {
  $scope.driversList = [
    {
        Driver: {
            givenName: 'Sebastian',
            familyName: 'Vettel'
        },
        points: 322,
        nationality: "German",
        Constructors: [
            {name: "Red Bull"}
        ]
    },
    {
        Driver: {
        givenName: 'Fernando',
            familyName: 'Alonso'
        },
        points: 207,
        nationality: "Spanish",
        Constructors: [
            {name: "Ferrari"}
        ]
    }
  ];
});
