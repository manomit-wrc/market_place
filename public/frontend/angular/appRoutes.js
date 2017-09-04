var marketPlaceRoute = angular.module('marketPlaceRoute',['ngRoute']);

marketPlaceRoute.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/',{
		templateUrl: '/templates/home.html'
	}).when('/about', {
		templateUrl: '/templates/about.html'
	}).when('/faq', {
		templateUrl: '/templates/faq.html'
	}).when('/jobs',{
		templateUrl: '/templates/jobs.html'
	});
});