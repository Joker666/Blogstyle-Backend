app.controller('LoginCtrl', function($scope, $auth){
    $scope.login = function() {
        $auth.login({ email: $scope.email, password: $scope.password })
            .then(function() {
                console.log('logged in');
            })
            .catch(function(response) {
                console.log(response);
            });
    };
});