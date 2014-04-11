var fruta = angular.module('FrutaApp', []);

fruta.controller('FrutaCtrl', [ '$scope', function($scope) {
	$scope.descricao = 'Uva';

	$scope.maca = function() {
		$scope.descricao = 'Maça';
	};

	$scope.pera = function() {
		$scope.descricao = 'Pera';
	};

} ]);