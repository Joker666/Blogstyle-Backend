app.controller('CreatePostCtrl', function ($scope) {

    $scope.options = {
        saveURL: 'http://localhost:8000/posts',
        imageUploadURL: 'http://localhost:8000/media',
        saveParams: {title: ''},
        saveRequestType: 'POST',
        events : {
            imageError : function(e, editor, error){
                console.log(error);
            }
        }
    };

    $scope.froalaAction = function(action){
        $scope.options.froala(action);
    };

    $scope.onPaste = function(e, editor, html){
        return 'Hijacked ' + html;
    };

    $scope.onEvent = function(e, editor, a, b){
        console.log('onEvent', e.namespace, a, b);
    };
    $scope.save = function () {
        $scope.options.saveParams.title = $scope.title;
        $scope.froalaAction('save');
    }
});