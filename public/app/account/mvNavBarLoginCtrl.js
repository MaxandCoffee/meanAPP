angular.module('meanapp').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNote, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function (success) {
            if (success) {
                mvNote.notify('You have successfully signed in');
            } else {
                mvNote.notify('Username/Password combination is incorrect');
            }
        });
    }

    $scope.signout = function(){
        mvAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            mvNote.notify('You have successfully signed out');
            $location.path('/');
        })
    }
});