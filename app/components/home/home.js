function homeRoutes(stateProvider) {

    stateProvider.state('/profile', {
        url: 'profile/:id',
        templateUrl: '/components/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
    });

}

module.exports = homeRoutes;