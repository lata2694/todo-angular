/**
 * Created by Lata Tiwari on 5/18/2017.
 */
angular.module('app')
    .controller('homeController', homeController);

homeController.$inject = ['$log', 'filterFactory'];
function homeController($log, filterFactory) {
    var vm = this;
    $log.debug("this is home controller");

    filterFactory
        .getUser()
        .then(function (user) {
            vm.user = user;
            $log.debug("vm------------", vm.user);
        });
}
