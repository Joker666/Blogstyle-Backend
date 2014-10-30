app.factory('PostService', function($http, $q){
    return {
        getAll: function() {
            return $http.get('/posts');
        },
        getOne: function(id) {
            return $http.get("/posts/" + id);
        },
        removePost: function(id){
            return $http.delete("/posts/" + id);
        }
    }
});