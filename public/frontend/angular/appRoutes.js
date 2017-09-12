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
	}).when('/vendor/register',{
		templateUrl: '/templates/register.html'
	}).when('/freelancer/register',{
		templateUrl: '/templates/register.html'
	}).when('/blog', {
		templateUrl: '/templates/blog.html'
	}).when('/blog-details/:id', {
		templateUrl: '/templates/blogpage.html'
	}).when('/work-details', {
		templateUrl: '/templates/work.html'
	}).when('/signup', {
		templateUrl: '/templates/signup.html'
	});
});