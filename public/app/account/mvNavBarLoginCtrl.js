(function () {
    angular.module('meanapp').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNote, mvAuth) {
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
    });
})();