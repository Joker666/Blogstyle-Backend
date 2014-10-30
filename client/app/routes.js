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
            },
            resolve:{
                CurrentUserObj:  function(Account, CurrentUser){
                    return Account.getProfile().then(function(response) {
                        //CurrentUser = response.data;
                        CurrentUser.id = parseInt(response.data.id);
                        CurrentUser.email = response.data.email;
                        CurrentUser.username = response.data.username;
                        CurrentUser.firstName = response.data.first_name;
                        CurrentUser.lastName = response.data.last_name;
                    });
                }
            }
        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/admin/dashboard.html',
            controller: 'DashboardCtrl'
        })

        //Posts
        .state('user.dashboard.post', {
            url: '/posts',
            templateUrl: 'templates/admin/posts/all_posts.html',
            controller: 'PostCtrl'
        })
        .state('user.dashboard.post.create', {
            url: '/create',
            views: {
                '@user.dashboard': {
                    templateUrl: 'templates/admin/posts/create_update_post.html',
                    controller: 'CreateUpdatePostCtrl'
                }
            }
        })
        .state('user.dashboard.post.edit', {
            url: '/edit/:id',
            views: {
                '@user.dashboard': {
                    templateUrl: 'templates/admin/posts/create_update_post.html',
                    controller: 'CreateUpdatePostCtrl'
                }
            }
        })

        //Media
        .state('user.dashboard.media', {
            url: '/media'
        })
        .state('user.dashboard.media.create', {
            url: '/create',
            views: {
                '@user.dashboard': {
                    templateUrl: 'templates/admin/media/create_media.html',
                    controller: 'CreateMediaCtrl'
                }
            }
        })
    ;
});