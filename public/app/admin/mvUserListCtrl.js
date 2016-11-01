angular.module('meanapp').controller('mvUserListCtrl', function($scope, mvUser){
    $scope.users = mvUser.query();
});