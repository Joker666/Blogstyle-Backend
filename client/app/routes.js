app.config(function($stateProvider, $urlRouterProvider, AccessLevels) {
    $urlRouterProvider.otherwise("/");


    $stateProvider
        .state('public', {
            abstract: true,
            template: '<ui-view/>',
            data: {
                access: AccessLevels.public
            }
        })
        .state('public.home', {
            url: '/',
            templateUrl: 'templates/public/home.html',
            controller: 'HomeCtrl'
        })
        .state('public.login', {
            url: '/login',
            templateUrl: 'templates/public/login.html',
            controller: 'LoginCtrl'
        });


    $stateProvider
        .state('user', {
            abstract: true,
            template: '<ui-view/>',
            data: {
                access: AccessLevels.user
            }
        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/admin/dashboard.html',
            controller: 'DashboardCtrl'
        });
});