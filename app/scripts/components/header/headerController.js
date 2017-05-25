/**
 * Created by Lata Tiwari on 5/24/2017.
 */
angular.module('app')
    .controller('HeaderController', headerController);

headerController.$inject = ['$log' ,'signInFactory', 'SignInProcess'];

function headerController($log, signInFactory, SignInProcess) {
    var vm = this;
    vm.authorized = false;
    vm.signOut = signOut;
    vm.activeuser = {};

    SignInProcess.addingListners({
        event: "SignIn",
        callback: authorizedUser
    });

    function authorizedUser ( user ) {
        vm.authorized = true;
        vm.activeuser = user[0];
        $log.debug("user in header controller is----", vm.activeuser);
    }

    function signOut () {
        vm.authorized = !vm.authorized;
    }
}