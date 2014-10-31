app.controller('MediaCtrl', function($scope, MediaService){
    $scope.photos = [];
    MediaService.getAll().success(function(data) {
        console.log(data);
        $scope.photos = data;
    });
});