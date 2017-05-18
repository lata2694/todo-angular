/**
 * Created by Lata Tiwari on 5/18/2017.
 */
angular.module ('app')
    .controller('homeController', homeController) ;

homeController.$inject = [ '$log', 'modelFactory' ];
function homeController ($log, modelFactory) {
    var vm = this;
    $log.debug("this is home controller") ;
    vm.getData = modelFactory.getData();
}
