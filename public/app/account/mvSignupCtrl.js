angular.module('meanapp').controller('mvSignupCtrl', function($scope, mvNote, mvUser, $location, mvAuth) {

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function() {
            mvNote.notify('User account created!');
            $location.path('/');
        }, function(reason) {
            mvNote.error(reason);
        })
    }
});