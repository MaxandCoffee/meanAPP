angular.module('meanapp', ['ngResource', 'ngRoute']);

angular.module('meanapp').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
            return mvAuth.authorizedCurrentUserForRoute('admin');
        }},
        user: {auth: function(mvAuth) {
            return mvAuth.authorizedAuthenticatedUserForRoute();
        }}
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mvMainCtrl'})
        .when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl',
            resolve: routeRoleChecks.admin
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl',
            resolve: routeRoleChecks.user
        })
        .when('/courses', {
            templateUrl: '/partials/courses/courseList',
            controller: 'mvCourseListCtrl',
        })
        .when('/courses/:id', {
            templateUrl: '/partials/courses/courseDetail',
            controller: 'mvCourseDetailCtrl',
        })
});

angular.module('meanapp').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
});