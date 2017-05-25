
angular.module("app")
        .controller("HomeController", homeController);

homeController.$inject = ['$log', 'limitFactory', 'filterFactory'];

function homeController($log, limitFactory, filterFactory) {
    var vm = this;
    var limit = 3;
    var offset = 0;
    vm.loadMore = loadMore;
    viewUsers(limit);
    $log.debug("this is home controller");

    /////////////////////////////////////////////

    function viewUsers(limit) {
        filterFactory
            .getUser()
            .then(function (user) {

                vm.user = user.slice(offset, limit);

                $log.debug("vm------------", vm.user);
            });
    }

    function loadMore() {
        limit = limitFactory.setLimit(limit);
        viewUsers(limit);
    }
}
