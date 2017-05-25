/**
 * Created by Lata Tiwari on 5/21/2017.
 */

var homeRoutes = require('./scripts/components/home/home');
var headerRoutes = require('./scripts/components/header/header');

function RouteConfigurations(locationProvider, stateProvider, urlRouterProvider) {

    urlRouterProvider.otherwise("/error");

    locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    stateProvider.state("/",{
            url: "/",
            templateUrl: "scripts/components/home/home.html",
            controller: 'HomeController',
            controllerAs: "vm"
        });

    stateProvider.state("/onError",{
        url: "/error",
        templateUrl: "scripts/components/error/error.html",
    });

    homeRoutes(stateProvider);
    headerRoutes(stateProvider);

    // urlRouterProvider.otherwise('/error');
}

module.exports = RouteConfigurations;
