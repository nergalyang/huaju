app.controller('jobPostsController', ['$scope','jobs', function($scope,jobs) {
	jobs.success(function(data){
  	$scope.jobs = data;
  });
}]);