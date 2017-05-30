/**
 * Created by Lata Tiwari on 5/25/2017.
 */
angular.module('app')
    .factory('SignInProcess', signInProcess);

signInProcess.$inject = [ '$log' ];

function signInProcess( $log ) {

    var service = {};
    service.addingListners = addingListners;
    var listeners = [];
    service.updating = updating;
    service.removingListners = removingListners;

    return service;


    function addingListners ( listener ) {
        listeners.push( listener );
    }

    function updating( user ) {

        $log.debug("listeners----", listeners);

        listeners.forEach( function ( listener, index ) {

            $log.debug("listener is----", listener);
            if (listener.event == "SignIn") {
                listener.callback( user );
            }
            // if(listener.event == "Authorized") {
            //     listener.callback( user );
            // }
            else {
                $log.debug("not a sign in event");
            }
        } );
    }

    function removingListners( listener ) {
        var index = listeners.indexOf( listener );
        listeners.splice(index, 1);
        return listener;
    }

}
