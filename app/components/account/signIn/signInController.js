/**
 * Created by Lata Tiwari on 5/22/2017.
 */
angular.module('app')
    .controller('signInController', signInController);

signInController.$inject = ['$log', 'signInFactory', '$state', 'toaster'];

function signInController($log, signInFactory, $state, toaster) {
    var vm = this;
    vm.activeUser = '';
    vm.message = " ";
    vm.checkingUser = checkingUser;

    ///////////////////////////////////////

    function checkingUser() {

        $log.debug("Checking users.......");

        var authenticatedUser = signInFactory.authentication(vm.currentUserName, vm.currentUserPass);

        if (authenticatedUser.length == 0) {

            $log.debug("active user is not in the list");

            toaster.pop({
                type: 'warning',
                title: 'Make sure to Sign Up',
                body: "Something's wrong. Please try again" ,
                showCloseButton: true
            });

        } else {
            vm.activeUser = authenticatedUser[0];
            $log.debug("logged in user----------", vm.activeUser);
            redirect('/');
        }

    }

    function redirect(where) {
        $state.go(where);
    }
}
