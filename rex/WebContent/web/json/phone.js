var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {
	$http.get('phones.json').success(function(data) {
		//console.log('data: ', data);
		
		$scope.phones = data;
		
		$scope.autor = {
				name : 'Andre',
				age : 26,
				lastName: 'Lermen'
		};
	})
	.error(function(data, status, headers, config) {
		console.error(data);		
	});

});