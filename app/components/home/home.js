function homeRoutes(stateProvider) {

    stateProvider.state('/profile', {
        url: '/profile',
        templateUrl: '/components/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        params : { 'id':null },
    });

}

module.exports = homeRoutes;