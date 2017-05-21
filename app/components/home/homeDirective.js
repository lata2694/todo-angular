/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module('app')
    .directive('homeDirective', homeDirective);

function homeDirective() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: "./components/home/home.html",
        controller: HomeController,
        controllerAs: 'vm',
        bindToController: true
        /*because the scope is isolated;
         when using "controller as" syntax with a directive when you want to bind the outer scope to the directive's controller's scope.*/
    };
}

HomeController.$inject = ['$log', 'limitFactory', 'filterFactory'];

function HomeController($log, limitFactory, filterFactory) {
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

    function loadMore() {
        vm.limit = limitFactory.setLimit(vm.limit);
        viewUsers(vm.limit);
    }

}
