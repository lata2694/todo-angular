/**
 * Created by Lata Tiwari on 5/26/2017.
 */

angular.module('app')
    .directive('optionsDirective', optionsDirective);

function optionsDirective () {
    return {
        restrict: 'E',
        templateUrl: "./scripts/components/options/options.html",
        controller: 'OptionsController',
        controllerAs: 'vm',
    };
}