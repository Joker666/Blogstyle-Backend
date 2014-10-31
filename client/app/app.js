var app = angular.module('clientApp', [
    'ui.router',
    'ngAnimate',
    'satellizer',
    'froala',
    'angularFileUpload',
    'ui.bootstrap',
    'toaster',
    'akoenig.deckgrid'
]);

app.value('froalaConfig', {
    inlineMode: false,
    height: 350,
    placeholder: '',
    events : {
        align : function(e, editor, alignment){
            console.log(alignment + ' aligned');
        }
    }
});

app.run(function($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log("stateChangeStart: from '"+fromState.name + "' to '"+ toState.name+"'");
        if (!Auth.authorize(toState.data.access)) {
            event.preventDefault();
            $state.go('public.login');
        }
        if (Auth.isAuthenticated()) {
            if(toState.name === 'public.login'){
                event.preventDefault();
                $state.go('user.dashboard');
            }
        }
    });

    $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
            console.log("stateChangeError: from '"+fromState.name + "' to '"+ toState.name+"' with error: "+error);
        });

    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState){
            console.log("stateChangeSuccess: from '"+fromState.name + "' to '"+ toState.name+"' with params " +
            JSON.stringify(toParams));
        });
});