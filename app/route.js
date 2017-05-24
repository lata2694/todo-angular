/**
 * Created by Lata Tiwari on 5/21/2017.
 */

var homeRoutes = require('./components/home/home');
var headerRoutes = require('./components/header/header');

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

    stateProvider.state("/onError",{
        url: "/error",
        templateUrl: "../components/error/error.html",
    });

    homeRoutes(stateProvider);
    headerRoutes(stateProvider);

    // urlRouterProvider.otherwise('/error');
}

module.exports = RouteConfigurations;
