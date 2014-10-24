app.controller('DashboardCtrl', function($scope, $auth){
    $scope.yolo = 'yolo';
    $scope.logout = function(){
        $auth.logout()
            .then(function() {
                console.log('logged out');
            });
    }
});