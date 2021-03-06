'use strict';

var parkease = angular.module("parkease", ["ngRoute", "ngDialog"]);

parkease.config(["$routeProvider",  function($routeProvider) {

	$routeProvider.
		when('/', {
			templateUrl: '../partials/home.html',
			controller: 'SignInCtrl'
		}).
		when('/listspace', {
			templateUrl: '../partials/listSpace.html',
			controller: 'ListSpaceCtrl'
		}).
		when('/findspace', {
			templateUrl: '../partials/findSpace.html',
			controller: 'FindSpaceCtrl'
		}).
		when('/locatespace', {
			templateUrl: '../partials/locateSpace.html',
			controller: 'LocateSpaceCtrl'
		}).
		when('/goldmine', {
			templateUrl: '../partials/goldMine.html',
			controller: 'GoldMineCtrl'
		}).
		when('/cashregister', {
			templateUrl: '../partials/cashRegister.html',
			controller: 'CashRegisterCtrl'
		}).
		when('/bookings', {
			templateUrl: '../partials/pitSpots.html',
			controller: 'BookingCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);

/*window.captureRegistrationData = function(index) {
	var dom = document.getElementById('regFormContainer');
	var $scope = angular.element(dom).scope();
	//Pass all the information

	$scope.loadPopup.call($scope, index);
}*/