var MainCtrl = angular.module('MainCtrl',[]);

MainCtrl.controller('MainController', function ($scope, $http) {
	$scope.testimonials = {};
	$scope.banner = [];
	$scope.homeContent = function() {
		$http.get('/home-content').then(function(response){
			
			$scope.testimonials = response.data.testimonials;
			$scope.banner = response.data.banner;
			

		}).catch(function(reason){

		});
	};
}).directive('testimonialSlider',function() {
    var linker = function($scope, element, attr) {
        $scope.$watch('testimonials', function () {
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
	        //console.log(JSON.stringify($scope.banner));
	        

			element.ready(function(){
            $scope.$apply(function(){
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
	        	$('#loader_image').delay(2000).fadeOut(1000);
            	});
          	});
        });
    };
    return {
        restrict: "A",
        link: linker
    }
});