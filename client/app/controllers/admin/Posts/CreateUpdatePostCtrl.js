app.controller('CreateUpdatePostCtrl', function ($scope, CurrentUser, $auth, $stateParams, PostService, toaster) {

    if(!angular.isDefined($stateParams.id)) {
        $scope.new_update_post = 'New Post';

        $scope.isCreate = function(){
            return true;
        };

        $scope.options = {
            saveURL: '/posts',
            imageUploadURL: '/media',
            headers : {
                'Authorization': 'Bearer ' + $auth.getToken()
            },
            saveParams: {
                title: '',
                user_id: ''
            },
            saveRequestType: 'POST',
            events : {
                imageError : function(e, editor, error){
                    console.log(error);
                },
                afterSave : function(){
                    console.log('saved');
                    toaster.pop('success', "Successful", "Post Created Successfully");
                    $scope.$apply();
                }
            }
        };

        $scope.save = function () {
            $scope.options.saveParams.title = $scope.title;
            $scope.options.saveParams.user_id = CurrentUser.id;
            $scope.froalaAction('save');
        };
    }
    else if (angular.isDefined($stateParams.id)) {
        $scope.options = {
            saveURL: '',
            imageUploadURL: '/media',
            headers : {
                'Authorization': 'Bearer ' + $auth.getToken()
            },
            saveParams: {
                title: ''
            },
            saveRequestType: 'PUT',
            events : {
                imageError : function(e, editor, error){
                    console.log(error);
                },
                afterSave : function(){
                    console.log('updated');
                    toaster.pop('success', "Successful", "Post Updated Successfully");
                    $scope.$apply();
                }
            }
        };
        PostService.getOne($stateParams.id).success(function(data) {
            $scope.title = data.title;
            $scope.myHtml = data.body;
            $scope.new_update_post = 'Update Post';

            $scope.isCreate = function(){
                return false;
            };
            $scope.options.saveURL = '/posts/' + $stateParams.id;
            $scope.update = function(){
                $scope.options.saveParams.title = $scope.title;
                console.log($scope.options);
                $scope.froalaAction('save');
            }
        });
    }

    $scope.froalaAction = function(action){
        $scope.options.froala(action);
    };

    $scope.onPaste = function(e, editor, html){
        return 'Hijacked ' + html;
    };

    $scope.onEvent = function(e, editor, a, b){
        console.log('onEvent', e.namespace, a, b);
    };

});