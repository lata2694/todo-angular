/**
 * Created by Lata Tiwari on 5/18/2017.
 */

var angular = require ( 'angular' );
var app = angular.module ( 'app', [] ) ;

app.config ( [ '$logProvider', function ( $logProvider ) {
        $logProvider.debugEnabled (true) ;
} ] );
