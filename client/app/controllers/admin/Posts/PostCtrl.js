app.controller('PostCtrl', function($scope, PostService, SweetAlert){
    $scope.posts = [];
    PostService.getAll().success(function(data) {
        $scope.posts = data.posts;
        $scope.author = data.name;
    });

    $scope.remove = function(post){
        SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm){
                if (isConfirm) {
                    PostService.removePost(post.id).success(function(){
                        $scope.posts.splice($scope.posts.indexOf(post),1);
                        SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    });
                } else {
                    SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
    };

});