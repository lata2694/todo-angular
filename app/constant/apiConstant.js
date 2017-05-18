/**
 * Created by Lata Tiwari on 5/14/2017.
 */


//Use constants for values that do not change and do not come from another service.
var api = {
    "url" : "../../app/api/generated.json",
    } ;

angular.module ( 'app' )
    .constant ( 'apiConstant', api );