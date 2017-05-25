/**
 * Created by Lata Tiwari on 5/25/2017.
 */
angular.module('app')
    .factory('SignInProcess', signInProcess);

signInProcess.$inject = [ '$log' ];

function signInProcess( $log ) {
    var service = {};
    var listeners = [];
    service.addingListners = addingListners;
    service.updating = updating;
    return service;

    function addingListners ( listener ) {
        listeners.push( listener );
    }

    function updating( user ) {
        listeners.forEach( function ( listener, index ) {
            if (listener.event == "SignIn") {
                listener.callback( user );
            }

            else {
                $log.debug("not a sign in event");
            }
        } );
    }

}
