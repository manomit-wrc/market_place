var marketPlaceRoute = angular.module('marketPlaceRoute',['ngRoute']);

marketPlaceRoute.config(function ($routeProvider, $locationProvider, $qProvider) {
	$locationProvider.html5Mode(true).hashPrefix('#');
	$routeProvider.when('/',{
		templateUrl: '/templates/home.html'
	}).when('/about', {
		templateUrl: '/templates/about.html'
	}).when('/faq', {
		templateUrl: '/templates/faq.html'
	}).when('/contact', {
		templateUrl: '/templates/contact.html'
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
	}).when('/login', {
		templateUrl: '/templates/login.html'
	}).when('/freelancer-profile', {
		templateUrl: '/templates/freelancer-profile.html',

		authenticated: true,
		type: 'F'
	}).when('/vendor-profile', {

		authenticated: true
	}).when('/jobpost', {
		templateUrl: '/templates/jobspost.html',
	}).when("/vendor-profile", {

		templateUrl: '/templates/vendor-profile.html',
		authenticated: true,
		type: 'V'
	}).when('/change-password', {
		templateUrl: '/templates/change_password.html',
		authenticated: true
	}).when('/editjobpost', {
		templateUrl: '/templates/editjobspost.html',
		authenticated: true
	});

	$qProvider.errorOnUnhandledRejections(false);
});

marketPlaceRoute.run(function($rootScope,$location,AuthToken){
	$rootScope.$on('$routeChangeStart',function(event,next,current){
		if(next.$$route.authenticated && next.$$route.type == AuthToken.getType()) {
			if(AuthToken.isLoggedIn()) {
				$location.path(next.$$route.originalPath);
			}
			else {
				$location.path("/");
			}
			
		}
		if($location.path() == "/login") {

			if(AuthToken.isLoggedIn()) {
				$location.path("/freelancer-profile");
			}
			
		}

	});
});