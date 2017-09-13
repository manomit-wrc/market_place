var marketPlaceRoute = angular.module('marketPlaceRoute',['ngRoute']);

marketPlaceRoute.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('#');
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
	}).when('/login', {
		templateUrl: '/templates/login.html'
	}).when("/freelancer-profile", {
		templateUrl: '/templates/freelancer-profile.html',
		authenticated: true
	});
});

marketPlaceRoute.run(function($rootScope,$location,AuthToken){
	$rootScope.$on('$routeChangeStart',function(event,next,current){
		if(next.$$route.authenticated) {
			
			/*if(!AuthToken.isLoggedIn() && !$cookieStore.get('remember_token')) {
				$location.path("/");
			}*/
			/*AuthToken.returnType().then(function(response){
				if(response == next.$$route.type) {
					
					if(next.$$route.originalPath == "/") {
	                    if(AuthToken.isLoggedIn()) {
	                        $location.path(current.$$route.originalPath);
	                        
	                    }
            		}
				}
				else {
					$location.path("/");
				}
			});*/

			if(AuthToken.isLoggedIn()) {
				$location.path(current.$$route.originalPath);
				
			}
			else {
				$location.path("/");
			}
			
		}
	});
});