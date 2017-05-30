/*Created by Lata Tiwari on 5/21/2017.*/

angular.module( "app" )
        .controller( 'ProfileController', profileController );

profileController.$inject = [ '$log', '$stateParams', 'profileFactory', 'AuthorizedFactory'];

function profileController ( $log, stateParams, profileFactory, AuthorizedFactory) {
    var vm = this;
    // vm.authorized = false;
    vm.activeUser =  AuthorizedFactory.getAuthorized();
    vm.displayCrud= false;
    // vm.activeId = AuthorizedFactory.getAuthorized();
    vm.user = '';
    gettingData();
    $log.debug("this is profile controller");


    //////////////////////////////////////////////////

    function gettingData() {
        vm.user = profileFactory.getUserInfo(stateParams.id);
        vm.user = vm.user[0];
        $log.debug("particular user----", vm.user);
        // displayOptions();
        return vm.user;
    }

    function displayOptions() {
        $log.debug("vm.activeId----",vm.activeUser.activeId);
        (vm.user.id === vm.activeUser.activeId) ? vm.displayCrud=true : vm.displayCrud=false;
    }
}