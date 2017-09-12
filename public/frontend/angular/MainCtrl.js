var MainCtrl = angular.module('MainCtrl',['ngSanitize']);

MainCtrl.controller('MainController', function ($scope, $http, $sce) {
	$scope.testimonials = {};
	$scope.banner = [];
	$scope.organization = {};
	$scope.faq_category = {};
	$scope.blog_content = {};
	$scope.blog_details = {};
	$scope.work_details = {};
	$scope.active_class = 0;

	
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

	$scope.workContent = function() {
		$http.get('/work-content').then(function(response){
			console.log(response.data);
			$scope.work_details	= response.data.work_details;
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