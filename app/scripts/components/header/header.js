/**
 * Created by Lata Tiwari on 5/22/2017.
 */
function headerRoutes(stateProvider) {

    stateProvider.state('/signIn', {
        url: '/signIn',
        templateUrl: '/scripts/components/account/signIn/signIn.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
    });

}

module.exports = headerRoutes;