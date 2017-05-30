/**Created by Lata Tiwari on 5/22/2017.**/

angular.module('app')
        .factory('profileFactory', profileFactory);

profileFactory.$inject = ['$log', 'filterFactory', 'SignInProcess'];

function profileFactory($log, filterFactory, SignInProcess) {

    var service = {};
    service.user = '';
    service.getUserInfo = getUserInfo;
    var cache = filterFactory.getCache();

    return service;

    //////////////////////////////////////////////////////////////////

    function detailInfo (userInfo, id) {
        var user = userInfo.filter(function (user) {
            if (user.id === id)
                return user;
        });
        return user;
    }

    function getUserInfo(id) {
        return detailInfo(cache, parseInt(id));
    }
}