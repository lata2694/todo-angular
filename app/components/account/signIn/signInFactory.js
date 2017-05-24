/**
 * Created by Lata Tiwari on 5/22/2017.
 */

angular.module('app')
    .factory('signInFactory', signInFactory);

signInFactory.$inject = ['$log', 'filterFactory'];

function signInFactory ($log, filterFactory) {

    var service = {};

    var cache = filterFactory.getCache();
    service.authentication = authentication;
    return service;

    /////////////////////////////////////////

    function authentication(name, password) {

        $log.debug("trying to authenticate the user");

            var  activeUser = cache.filter(
            function filterBy( user ) {
                return (
                    user.userName === name &&
                    user.pass === password
                );
            });
        $log.debug("active User--------", activeUser);

        return activeUser;
    }


}
