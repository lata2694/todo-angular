/**
 * Created by Lata Tiwari on 5/22/2017.
 */

angular.module('app')
        .factory('profileFactory', profileFactory);

profileFactory.$inject = ['filterFactory'];

function profileFactory(filterFactory) {

    var service = {};
    service.user = '';
    service.getUserInfo = getUserInfo;
    var cache = filterFactory.getCache();

    return service;

    //////////////////////////////////////////////////////////////////
    function getUserInfo(id) {
        return detailInfo(cache, parseInt(id));
    }

    function detailInfo(userInfo, id) {
        var user = userInfo.filter(function (user) {
            if (user.id === id)
                return user;
        });
        return user;
    }
}