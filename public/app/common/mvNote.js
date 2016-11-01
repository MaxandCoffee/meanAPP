angular.module('meanapp').value('mvToastr', toastr);

angular.module('meanapp').factory('mvNote', function (mvToastr) {
    return {
        notify: function (msg) {
            mvToastr.success(msg);
            console.log(msg);
        }
    };
});