/**
 * Created by Lata Tiwari on 5/21/2017.
 */

var homeRoutes = require('./components/home/home');

function RouteConfigurations(locationProvider, stateProvider, urlRouterProvider) {

    locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    stateProvider.state("/",{
            url: "/",
            templateUrl: "components/home/home.html",
            controller: 'HomeController',
            controllerAs: "vm"
        });

    homeRoutes(stateProvider);
}

module.exports = RouteConfigurations;
