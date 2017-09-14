var MainCtrl = angular.module('MainCtrl',['ngSanitize','ngStorage']);


MainCtrl.factory('AuthToken', function($localStorage){
	var authTokenFactory = {};

	authTokenFactory.getToken = function() {
		return $localStorage.token;
	};

	authTokenFactory.setToken = function(token) {
		if(token)
			$localStorage.token = token;
		else
			delete $localStorage.token;
	};

	authTokenFactory.isLoggedIn = function() {
		if(authTokenFactory.getToken())
			return true;
		else
			return false;
	};
	return authTokenFactory;
});

MainCtrl.factory('AuthInterceptor', function ($q, $location, $localStorage) {
	return {
		'request': function (config) {
			config.headers = config.headers || {};
			if ($localStorage.token) {
				config.headers.Authorization = $localStorage.token;
			}
			
			return config;
		},
		'responseError': function (response) {
			

			if (response.status === 401 || response.status === 403 || response.status === 500) {
				$location.path("/login");
			}
			return $q.reject(response);
		}
	};
}).config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
});


MainCtrl.controller('MainController', function ($scope, $http, $sce, $routeParams, $filter,$timeout, AuthToken, $window, $location) {
	$scope.testimonials = {};
	$scope.banner = [];
	$scope.organization = {};
	$scope.faq_category = {};
	$scope.blog_content = {};
	$scope.blog_details = {};
	$scope.work_details = {};
	$scope.active_class = 0;
	$scope.user = {};

	$scope.init = function() {
		$http.get('/user-profile').then(function(response){
			$scope.user = response.data.user_details;
		}).catch(function(err){
			
		});
	};

	if(AuthToken.isLoggedIn()) {
		$scope.init();
	}
	

	$scope.homeContent = function() {
		$http.get('/home-content').then(function(response){
			
			$scope.testimonials = response.data.testimonials;
			$scope.banner = response.data.banner;
			$scope.jobcategories = response.data.jobcategories;
			$scope.organization = response.data.organization;

			

			$scope.client_parcentage = ($scope.organization[0].client) / 100;
			$scope.freelancer_parcentage = ($scope.organization[0].freelancers) / 100;
			$scope.jobs_completed_parcentage = ($scope.organization[0].jobs_completed) / 100;
			$scope.payed_to_freelancers_parcentage = ($scope.organization[0].payed_to_freelancers) / 100;

		}).catch(function(reason){

		});
	};

	$scope.aboutContent = function() {
		$http.get('/about-content').then(function(response){
			$scope.team = response.data.team;
			$scope.stories = response.data.stories;
			$scope.about = $sce.trustAsHtml(response.data.about);
			$scope.about_short = $filter('limitTo')(response.data.about, 30, 0);
			$scope.about_short_limit = $sce.trustAsHtml($scope.about_short);
			
		}).catch(function(reason){

		});
	};

	$scope.faqContent = function() {
		$http.get('/faq-content').then(function(response){
			$scope.faq_category	=	response.data.faq_category;
		}).catch(function(reason){

		});
	};

	$scope.workContent = function() {
		$http.get('/work-content').then(function(response){
			console.log(response.data);
			$scope.work_details	= response.data.work_details;
		}).catch(function(reason){

		});
	};

	$scope.doRegister=function(){
		$http({
			method  : 'POST',
			url     : '/vendor/register',
			data : {
				email:$scope.myEmail,
				fname:$scope.myFisrtname,
				lname:$scope.myLastname,
				password:$scope.myPassword
			},
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {

		});
		
	};

	$scope.editProfile = function (valid) {
		if(valid){
			$http({
				method: "post",
				url: "/edit_profile",
				data:{
					all : $scope.user
				},
				headers: {
		         	'Content-Type': 'application/json'
			  	}
			});
		}
	};

	$scope.blogContent = function() {
		$http.get('/blog-content').then(function (response){
			$scope.blog_content = response.data.blog_content;

			var blog_contentArray = [];

			for(var i=0; i<$scope.blog_content.length; i++){
				$scope.short_description_limit = $filter('limitTo')($scope.blog_content[i].short_description, 20, 0);
				$scope.short_description_limit_html = $sce.trustAsHtml($scope.short_description_limit);
				
				blog_contentArray.push({
					blog_category_id: $scope.blog_content[i].blog_category_id,
					blog_image: $scope.blog_content[i].blog_image,
					blog_name: $scope.blog_content[i].blog_name,
					createdAt: $scope.blog_content[i].createdAt,
					id: $scope.blog_content[i].id,
					long_description: $sce.trustAsHtml($scope.blog_content[i].long_description),
					short_description: $sce.trustAsHtml($scope.blog_content[i].short_description),
					short_description_limit: $scope.short_description_limit_html
				});
			}
			$scope.blog_content1 = angular.copy(blog_contentArray);

			$scope.blogcategory = response.data.blogcategory;
		}).catch(function(reason){

		});
	};
	

	$scope.filterPortFolio = function(value) {
		var tempArr = [];
		if($scope.blog_details.length > 0) {
			$scope.tempObj = angular.copy($scope.blog_details);
			$scope.blog_content = angular.copy($scope.tempObj);
		}
		if(value != 0) {
			$scope.blog_details = angular.copy($scope.blog_content);
			for(var i=0;i<$scope.blog_details.length;i++) {
				if(value == $scope.blog_content[i].blog_category_id) {
					tempArr.push(
					{
						id:$scope.blog_content[i].id,
						blog_name: $scope.blog_content[i].blog_name,
						long_description: $scope.blog_content[i].long_description,
						short_description: $scope.blog_content[i].short_description,
						blog_image: $scope.blog_content[i].blog_image,
						blog_category_id: $scope.blog_content[i].blog_category_id,
						createdAt: $scope.blog_content[i].createdAt
					});
				}
			}
			
			$scope.blog_content = angular.copy(tempArr);
		}
		$scope.active_class = value;
		
	};

	$scope.doLogin = function (valid){
		//using headers line for sending angular to node with post method
		if(valid){
			$http.post('/authenticate',{
				email: $scope.myUsername,
				password: $scope.myPassword
			},{
				headers: 
				{
					'Content-Type':'application/json'
				}
			}).then(function(response){
				//console.log(response);
				if(response.data.code == "100") {
					AuthToken.setToken(response.data.token);
					$window.location.href = "/freelancer-profile";
					
				}

			}).catch(function(reason){
				
			});
		}
		
	};

	$scope.blogDetails = function (){
		$http.get('/blog_details',{params:{id:$routeParams.id}}).then(function(response){
			//AuthToken.setToken();
			$scope.get_token = AuthToken.getToken();
			//console.log($scope.get_token);
			$scope.blog_details = response.data.blog_details[0];
			
			$scope.short_description = $sce.trustAsHtml($scope.blog_details.short_description);
			$scope.long_description = $sce.trustAsHtml($scope.blog_details.long_description);
			$scope.blog_comments = [];
			$scope.blog_comments = response.data.blog_comments;
			$scope.comment_count = response.data.blog_comments.length;
			
		});
	};

	$scope.doComment = function (valid){
		//using headers line for sending angular to node with post method
		if(valid){
			$http.get('/fetch-user').then(function(response){
				var user_id = response.data.user_id;
				$http({
					method: 'POST',
					url: '/do-comment',
					data: {
						user_id: user_id,
						comments: $scope.comments,
						blog_id:$routeParams.id
					},
					headers: 
					{
						'Content-Type':'application/json'
					}
				}).then(function(response){
					//console.log(response);
				}).catch(function(reason){
					
				});
			});
		}
	};

	$scope.showVideo = function() {
		$timeout(function(){
			$('.popup-with-zoom-anim').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: true,
				preloader: false,
				midClick: true,
				removalDelay: 300,
				mainClass: 'my-mfp-zoom-in'
			});
			alert("Hello");
		});
	};

	$scope.doLogout = function() {
		AuthToken.setToken();
		$scope.user = {};
		$location.path("/login");
	};

}).directive('testimonialSlider',function() {
	var linker = function($scope, element, attr) {
		$scope.$watch('testimonials', function () {
			element.ready(function(){
				$scope.$apply(function(){

					$('.testimonials-slider').flexslider({
						animation: "fade",
						controlsContainer: $(".custom-controls-container"),
						customDirectionNav: $(".custom-navigation a")
					});

					$('.number-animator').appear();
					$('.number-animator').on('appear', function () {
						$(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
					});

					$('.animated-progress-bar').appear();
					$('.animated-progress-bar').on('appear', function () {
						$(this).css('width','0%').animate({ 'width': $(this).attr("data-percentage") }, 1000);
					});

					$('.animate-number').each(function () {
						$(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
					});
					$("#header").vegas({
						slides: $scope.banner,
						transition: 'fade',
						preloadImage: true,
						timer: true,
						shuffle: true,
						delay: 5000,
						animation: 'kenburns',
						cover: true
					});
				//$('#loader_image').delay(2000).fadeOut(1000);
				
			});
			});
		});
	};
	return {
		restrict: "A",
		link: linker
	}
}).directive('sideBar',function() {
	var linker = function($scope, element, attr) {
		$scope.$watch('faq_category', function () {
			element.ready(function(){
				$scope.$apply(function(){
					var $sideBar = $('#sidebar .panel');
					$sideBar.affix({
						offset: {
							top: function () {
								var offsetTop      = $sideBar.offset().top;

								return (this.top = offsetTop - 50)
							},
							bottom: ($('.footer').outerHeight(true) + $('.made').outerHeight(true)) + 130
						}
					});
				});
			});
		});
	};
	return {
		restrict: "A",
		link: linker
	}
}).directive('ngMatch', function($parse){
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function (scope, elem, attrs, ctrl) {
			if (!ctrl) return;
			if (!attrs['ngMatch']) return;

			var firstPassword = $parse(attrs['ngMatch']);

			var validator = function (value) {
				var temp = firstPassword(scope),
				v = value === temp;
				ctrl.$setValidity('match', v);
				return value;
			}

			ctrl.$parsers.unshift(validator);
			ctrl.$formatters.push(validator);
			attrs.$observe('ngMatch', function () {
				validator(ctrl.$viewValue);
			});
		}
	};
});

