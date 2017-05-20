/**
 * Created by Lata Tiwari on 5/18/2017.
 */
angular.module('app')
    .controller('homeController', homeController);

homeController.$inject = ['$log', 'filterFactory'];

function homeController($log, filterFactory) {
    var vm = this;
    vm.limit = 3;
    vm.offset = 0;
    vm.loadMore = loadMore;
    viewUsers(vm.limit);
    $log.debug("this is home controller");

    /////////////////////////////////////////////

    function viewUsers(limit) {
        filterFactory
            .getUser()
            .then(function (user) {
                vm.user = user.slice(vm.offset, limit);
                $log.debug("vm------------", vm.user);
            });
    }

    function loadMore(event) {

        if (vm.limit <= 10) {
            vm.limit = vm.limit + 3;
            viewUsers(vm.limit);
        }

        else {
            var myButton = document.getElementById('more-button')
            myButton.disabled = true;
            myButton.style.background = "grey";
        }
    }
}
