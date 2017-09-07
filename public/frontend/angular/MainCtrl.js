var MainCtrl = angular.module('MainCtrl',['ngSanitize']);

MainCtrl.controller('MainController', function ($scope, $http, $sce) {
	$scope.testimonials = {};
	$scope.banner = [];
	$scope.organization = {};
	$scope.faq_category = {};
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
			
		}).catch(function(reason){

		});
	};

	$scope.faqContent = function() {
		$http.get('/faq-content').then(function(response){
			$scope.faq_category	=	response.data.faq_category;
		}).catch(function(reason){

		});
	};

	$scope.blogContent = function() {
		$http.get('/blog-content').then(function (response){
			$scope.blog_content = response.data.blog_content;
			$scope.blogcategory = response.data.blogcategory;
		}).catch(function(reason){

		});
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
});