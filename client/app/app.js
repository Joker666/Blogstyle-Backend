var app = angular.module('clientApp', [
    'ui.router',
    'ngAnimate',
    'satellizer'
]);

app.run(function($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (!Auth.authorize(toState.data.access)) {
            event.preventDefault();

            $state.go('anonymous.login');
        }
    });
});