(function () {
    'use strict';
    angular.module('meanapp', [
        'ngResource',
        'ngRoute'
    ]);

    angular.module('meanapp').config(function ($routeProvider, $locationProvider) {
        var routeRoleChecks = {
            admin: {
                auth: function (mvIdentity, $q) {
                    return mvAuth.authorizedCurrentUserForRoute('admin');
                }
            }
        }

        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mvMainCtrl'
            })
            .when('/admin/users', {
                templateUrl: '/partials/admin/user-list',
                controller: 'mvUserListCtrl',
                resolve: routeRoleChecks.admin
            })
    });

    angular.module('meanapp').run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (evt, current, previous, rejecton) {
            if (rejecton === 'not authorized') {
                $location.path('/');
            }
        })
    })

})();