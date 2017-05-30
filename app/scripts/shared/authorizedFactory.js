/**
 * Created by Lata Tiwari on 5/30/2017.
 */
angular.module('app')
    .factory( 'AuthorizedFactory', authorizedFactory );

authorizedFactory.$inject = [ '$log' ];

function authorizedFactory( $log ) {
    var service = {};
    var activeUser = {
        activeId:'',
        authorized:false
    };
    service.getAuthorized = getAuthorized;
    service.setAuthorized = setAuthorized;

    return service;

    ////////////////////

    function getAuthorized() {
        $log.debug( "inside getAuthorized" );
        // $log.debug( "authorized-----", authorized);
        return activeUser;
    }

    function setAuthorized( isAuthorized, id ) {
        $log.debug( "inside setAuthorized" );
        activeUser.authorized = isAuthorized;
        activeUser.activeId = id;
    }
}