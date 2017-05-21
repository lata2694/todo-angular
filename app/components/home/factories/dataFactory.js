
/**
 * Created by Lata Tiwari on 5/20/2017.
 */

angular.module('app')
    .factory('dataFactory', dataFactory);

dataFactory.$inject = ['$log', '$http', 'apiConstant'];

function dataFactory($log, Ajax, api) {

    var service = {};
    service.getData = getData;
    return service;

    /////////////////////////////////
    function getData() {

        return Ajax.get(api.url)
            .then(function (response) {
                $log.debug("response---", response);
                $log.debug("data---", response.data);
                $log.debug("response.data.users---------", response.data.users);
                return (response.data.users);
            });
    }
}