(function () {
    angular.module('meanapp').controller('mvMainCtrl', function ($scope) {
        $scope.courses = [
            {name: 'Title One', featured: true, published: new Date('12/1/16')},
            {name: 'Title Two', featured: false, published: new Date('12/5/16')},
            {name: 'Title Three', featured: false, published: new Date('12/3/16')},
            {name: 'Title 4', featured: false, published: new Date('1/1/14')},
            {name: 'Title 5', featured: false, published: new Date('11/1/15')},
            {name: 'Title 6', featured: true, published: new Date('2/1/16')},
            {name: 'Title 7', featured: false, published: new Date('3/1/16')},
            {name: 'Title 8', featured: false, published: new Date('6/1/15')},
            {name: 'Title 9', featured: true, published: new Date('12/1/16')},
            {name: 'Title 10', featured: false, published: new Date('12/5/16')},
            {name: 'Title 11', featured: false, published: new Date('5/23/16')},
            {name: 'Title 12', featured: false, published: new Date('3/14/14')},
            {name: 'Title 13', featured: false, published: new Date('6/12/16')},
            {name: 'Title 14', featured: true, published: new Date('7/17/16')},
            {name: 'Title 15', featured: false, published: new Date('8/2/16')}
        ]
    });
})();