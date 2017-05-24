/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module ( 'app' )
    .directive ( 'headerDirective', headerDirective ) ;

function headerDirective () {
    return {
        restrict: 'E',
        templateUrl: "./components/header/header.html",
        controller: 'HeaderController',
        controllerAs: 'vm',
    };
}