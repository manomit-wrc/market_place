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
	
	authTokenFactory.getType = function() {
		 //alert('gettype');
		 var defer = $q.defer();
		 $http.get('/get-type').then(function(response){
                 console.log(response.data.type);
                //defer.resolve(response.data.type);
        }).catch(function(reason){

		});
		//return defer.promise;
		/*var defer = $q.defer();
		$http.get('/get-type',{
    		//params: { token: AuthToken.getToken()}
    		
    		
    	}).then(function(response){
    		alert('getres');
    		console.log(response.data.type);
    		defer.resolve(response.data.type);
    	});
    	return defer.promise;*/
	}
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


MainCtrl.controller('MainController', function ($scope, $http, $sce, $routeParams, $filter, $timeout, AuthToken, $window, $location) {
	$scope.testimonials = {};
	$scope.banner = [];
	$scope.organization = {};
	$scope.faq_category = {};
	$scope.blog_content = {};
	$scope.blog_details = {};
	$scope.work_details = {};
	$scope.active_class = 0;
	$scope.user = {};
	$scope.image={};
	$scope.files={};

	$scope.init = function() {
		$http.get('/user-profile').then(function(response){
			
			$scope.user = response.data.user_details;
             //alert('ok');
            /*var userType=response.data.user_details.type;
			if(userType=='V')
			{
			   $location.path("/vendor-profile");
              //$window.location.href("/vendor-profile");
			}
			else if(userType=='F')
			{
			  //$window.location.href("/freelancer-profile");
               $location.path("/freelancer-profile");
			}*/
		}).catch(function(err){
			
		});
	};


	if (AuthToken.isLoggedIn()) {
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
			$scope.faq_category	= response.data.faq_category;
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

	$scope.contactContent = function() {
		$http.get('/contact-content').then(function(response){
			//console.log(response.data);
			$scope.organization	= response.data.organization[0];
			$scope.map_address = response.data.organization[0].address;
			//console.log(response.data.organization[0].address);
			$scope.map_url = "https://maps.google.com/maps?q="+$scope.map_address+"&z=16&output=embed";
			//$scope.map_url = $scope.map_address;
		}).catch(function(reason){

		});
	};


	$scope.doRegister=function(valid){

	  if(valid)	
	  {

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
	  }
	};

   $scope.change_passwordsave=function(valid){
      
	  if(valid)	{
	  	$http({
			method  : 'POST',
			url     : '/change-password-check',
			data : {
				oldpwd:$scope.old_password,
				newpwd:$scope.new_password,
				confpwd:$scope.confirm_password,
			  },
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
              
               if(response){
			      $scope.msg = response.data.msg;
				}
		});
	  }

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
			}).then(function(response){
				if(response){
					$scope.msg = response.data.msg;
					
			        $timeout( function(){
			           $window.location.href = "/freelancer-profile";
			        }, 2000 );
				}
			});
		}
	};

	$scope.jobPostContent = function (){
		$http.get('/job-details').then(function(response){
			$scope.jobs_categories = response.data.jobs_category;
			$scope.jobs_skill = response.data.jobs_skill;
		});

	};

	$scope.getCountryDetails=function(){
		//alert('ok');
        $http.get('/country-details').then(function(response){
        	console.log(response.data.country_data);
			$scope.country_data = response.data.country_data;
			//$scope.jobs_skill = response.data.jobs_skill;
		});

	};

	$scope.getJobsDetails=function(){
		//alert('ok');
        $http.get('/jobs-details').then(function(response){

        	console.log(response.data.country_name);
        	$scope.jobs_data=[];
			$scope.jobs_data = response.data.jobs_data;
			$scope.country_name = response.data.country_name;
			//$scope.jobs_skill = response.data.jobs_skill;
		});

	};

	$scope.jobPostSubmit = function (valid){
		if(valid){
			$http({
				method: "POST",
				url: '/job-post-submit',
				data:{
					job: $scope.job
				},
				headers:{
					'Content-Type': 'application/json'
				}

			}).then(function(response){
				if(response){
					$window.location.href = "/jobpost";
				}
			});

		}
	};

	$scope.fetch_jobPostContent = function (){

		$http.get('/fetch_job_post_details').then(function(response){
			console.log(response);
			$scope.post_job_details = response.data.job_post;
			$scope.post_job_skills = response.data.job_skill;
		});

	};

	/*$scope.uploadedVendorImage = function(element) {
		
		   $scope.$apply(function($scope) {
	       $scope.image = element.files[0];
           console.log(element.files[0]);
	       
	      });
	};*/

	$scope.uploadedVendorImage = function(files) {
    //alert(files);
    $scope.files = files;
    };

	$scope.editvendorProfile = function (valid) {
		
		 //alert($scope.files);
		 if(valid) {
           $http({
				method: "post",
				url: "/edit_vendorprofile",
				headers: { "Content-Type": undefined  },
				//headers: { "Content-Type": 'application/json;charset = utf-8;'},
				//headers: { "Content-Type": 'application/x-www-form-urlencoded'},
				transformRequest: function(data) {
	            var formData = new FormData();
	            formData.append("user", angular.toJson(data.user));
	            //formData.append("files", data.files);
	            for (var i = 0; i < data.files.length; i++) {
	                formData.append("files[" + i + "]", data.files[i]);
	            }
	              return formData;
	          },
	          data: { all: $scope.user,ctry_id:$scope.country_name,files: $scope.files }
				/*processData: false,
				  transformRequest: function (data) {
				      var formData = new FormData();
				      formData.append("image", $scope.image);  
				      return formData;  
				  },  
				data:{
					all : $scope.user,
					ctry_id:$scope.country_name,
					vendor_image:formData
				},
				headers: {
		         	'Content-Type': 'application/json'
			  	}*/
			  	
			}).then(function(response){
				if(response){
			     $scope.msg = response.data.msg;
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
		if (valid) {
			$http.post('/authenticate',{
				email: $scope.myUsername,
				password: $scope.myPassword
			},{
				headers: 
				{
					'Content-Type':'application/json'
				}
			}).then(function(response){

				if (response.data.code == "100") {

					AuthToken.setToken(response.data.token);
					if (response.data.type == "V") {
						$window.location.href = "/vendor-profile";
					} else {
						$window.location.href = "/freelancer-profile";	
					}
				}
                else if(response.data.code == "300") {
					$scope.wraning_message = "Username or Password is wrong."
				}
			}).catch(function(reason){
				
			});
		}
	};

	$scope.blogDetails = function (){
		$http.get('/blog_details',{params:{id:$routeParams.id}}).then(function(response){
		    //AuthToken.setToken();
			$scope.get_token = AuthToken.getToken();
			//console.log($scope.response.data.blog_comments);
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
					//$location.path("/blog-details/$routeParams.id");
					//$window.location.href = "/blog-details/$routeParams.id";
				}).catch(function(reason){
					
				});
			});
		}
	};

	$scope.doContactSubmit = function(valid) {
		if (valid) {
			$http({
				method  : 'POST',
				url     : '/do-contact-submit',
				data : {
					fullname:$scope.fullname,
					email:$scope.email,
					phone:$scope.phone,
					comments:$scope.comments
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(function(response) {
				if (response) {
					$scope.msg = response.data.msg;
					$scope.fullname = '';
					$scope.email = '';
					$scope.phone = '';
					$scope.comments = '';
				}
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
			//alert("Hello");
		});
	};

	$scope.doLogout = function() {
		AuthToken.setToken();
		$scope.user = {};
		$location.path("/login");
	};

	/*$scope.changePassword = function() {
		 
		 $location.path("/change-password");
		//$window.location.href("/change-password");
	};*/
	//$scope.userProfile=function(){
       // $location.path("/vendor-profile");
	//}

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

MainCtrl.directive('addressBasedGoogleMap', function () {
    return {
        restrict: "A",
        template: "<div id='addressMap'></div>",
        scope: {
            Address: "=address",
            zoom: "="
        },
        controller: function ($scope, $element, $attrs, $http) {
            var geocoder;
            var latlng;
            var map;
            var marker;
            var lat;
            var lng;
            var addr;
            var initialize = function () {
                $http.get('/contact-content').then(function(response) {
                	addr = response.data.organization[0].address;
                	geocoder = new google.maps.Geocoder();
	                geocoder.geocode({'address': addr }, 
	                function (results, status) {
	                    if (status == google.maps.GeocoderStatus.OK) {
	                        lat = results[0].geometry.location.lat();
	                        lng = results[0].geometry.location.lng();
	                        latlng = new google.maps.LatLng(lat, lng);
		                   	var mapOptions = {
			                    zoom: $scope.zoom,
			                    center: latlng,
			                    mapTypeId: google.maps.MapTypeId.ROADMAP
			                };
	                		map = new google.maps.Map
                       		(document.getElementById('addressMap'), mapOptions);
                        	map.setCenter(results[0].geometry.location);
                        	marker = new google.maps.Marker({
                            	map: map,
                            	position: results[0].geometry.location
                        	});
	                    }
	                });  
				});
			};
            initialize();
        },
    };
});
