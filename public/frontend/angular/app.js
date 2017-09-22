var marketPlaceApp = angular.module('marketPlaceApp',['marketPlaceRoute','MainCtrl', 'vcRecaptcha']);

marketPlaceApp.directive('myNavbar', function () {
	return {
		restrict: 'E',
		templateUrl: '/templates/navbar.html',
		scope: true
	};
});