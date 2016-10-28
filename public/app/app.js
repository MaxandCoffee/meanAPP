(function () {
    'use strict';
   angular.module('meanapp', [
        'ngResource',
        'ngRoute'
    ]);

    angular.module('meanapp').config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mvMainCtrl'
            })
    });

})();