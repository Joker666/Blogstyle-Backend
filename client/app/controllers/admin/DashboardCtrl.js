app.controller('DashboardCtrl', function($scope, $auth, CurrentUser){
    $scope.logout = function(){
        $auth.logout()
            .then(function() {
                console.log('logged out');
            });
    }
});