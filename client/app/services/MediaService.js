app.factory('MediaService', function($http, $q){
    return {
        getAll: function() {
            return $http.get('/media');
        },
        getOne: function(id) {
            return $http.get("/media/" + id);
        },
        removePost: function(id){
            return $http.delete("/media/" + id);
        }
    }
});