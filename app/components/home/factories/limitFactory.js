/**
 * Created by Lata Tiwari on 5/21/2017.
 */

angular.module('app')
    .factory('limitFactory', limitFactory);

limitFactory.$inject = ['$log'];

function limitFactory($log) {

    var service = {};
    service.setLimit = setLimit;
    return service;

    /////////////////////////////////
    function setLimit(limit) {
        if (limit <= 10) {
            limit = limit + 3;

            if (limit == 12) {
                var loadButton = document.getElementById('more-button');
                loadButton.disabled = true;
                loadButton.style.background = "grey";
                loadButton.style.border = "grey";
                loadButton.style.color = "darkgrey";
            }
        }

        return limit;
    }
}