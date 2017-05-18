/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module ( 'app' )
    .directive ( 'footerDirective', footerDirective ) ;

function footerDirective () {
    return {
        restrict: 'E',
        templateUrl: "./components/footer/footer.html",
    };
}