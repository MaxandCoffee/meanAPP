(function () {
    angular.module('meanapp').controller('mvMainCtrl', function ($scope, mvCachedCourses) {
        $scope.courses = mvCachedCourses.query();
    })
})();