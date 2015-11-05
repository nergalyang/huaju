app.factory('jobs', ['$http', function($http) {
  return $http.get('jobs.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);