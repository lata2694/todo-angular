/**
 * Created by Lata Tiwari on 5/21/2017.
 */

angular.module("app")
        .controller('ProfileController', profileController);

profileController.$inject = [ '$log', '$stateParams', 'filterFactory' ];

function profileController ( log, stateParams, filterFactory ){
    var vm = this;
    vm.user = '';
    gettingData();
    log.debug("this is profile controller");

    /////////////////////////////////////////////

    function gettingData() {
        vm.user = filterFactory.getUserInfo(stateParams.id);
        vm.user = vm.user[0];
        log.debug("particular user----", vm.user);
        return vm.user;
    }

}