/**
 * Created by Lata Tiwari on 5/22/2017.
 */

angular.module('app')
    .factory('signInFactory', signInFactory);

signInFactory.$inject = ['$log', 'filterFactory', 'SignInProcess'];

function signInFactory ($log, filterFactory, SignInProcess) {

    var service = {};

    var cache = "";
    service.authentication = authentication;
    return service;

    /////////////////////////////////////////

    function authentication(name, password) {
        cache = filterFactory.getCache();
        $log.debug("trying to authenticate the user");
        $log.debug("cache-----", cache);

            var  activeUser = cache.filter(
            function filterBy( user ) {
                return (
                    user.userName === name &&
                    user.pass === password
                );
            });
        $log.debug("active User--------", activeUser);

        SignInProcess.updating( activeUser );

        return activeUser;
    }


}
