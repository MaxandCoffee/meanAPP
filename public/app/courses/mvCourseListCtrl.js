angular.module('meanapp').controller('mvCourseListCtrl', function($scope, mvCourse){
    $scope.courses = mvCourse.query();
});