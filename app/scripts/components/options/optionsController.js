/**
 * Created by Lata Tiwari on 5/26/2017.
 */

angular.module('app')
    .controller('OptionsController', optionsController);

optionsController.$inject = [ '$log' ];

function optionsController ( $log ){
    $log.debug("options controller working fine");
}