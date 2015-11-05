var app = angular.module('Huajujingying',['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
        controller: 'jobPostsController', 
        templateUrl: 'views/jobPosts.html' 
    }) 
	.otherwise({
    	redirectTo:'/'
    });
});