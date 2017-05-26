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

        if( user.length == 0 ) {
            $log.debug("inside header controller's if" );
            $log.debug("user----", user);
            signOut();
        }

        else {
            $log.debug("inside header controller's else" );
            signIn(  user );
        }
    }

    function signIn ( user ) {
        vm.authorized = true;
        vm.activeuser = user[0];
        $log.debug("user in header controller is----", vm.activeuser);
    }

    function signOut () {
        vm.authorized = false;
    }
}