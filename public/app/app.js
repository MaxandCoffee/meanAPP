(function () {
    'use strict';
   var app = angular.module('meanapp', [
        'ngResource',
        'ngRoute'
    ]);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main',
                controller: 'mainCtrl'
            })
    });

    app.controller('mainCtrl', function ($scope) {
        $scope.myVar = "Hello Angular";
    });
})();