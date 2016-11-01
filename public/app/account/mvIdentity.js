angular.module('meanapp').factory('mvIdentity', function () {
    return {
        currentUser: undefined,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    };
});