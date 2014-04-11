function Ctrl($scope, $http) {
	$scope.userType = 'guest';
	
	$scope.add = function(){
		console.log('add ', $scope.userType);
		
		var cliente = {"cliente" : {
			   "id" : $scope.userId,
			   "nome" : $scope.userType,
			   "endereco" : "AV BRASIL, 200"
			}};

		
		$http({		
			url: "/rex/cliente/salvar",
			dataType: "json",
			method: "POST",
			//data: JSON.stringify(cliente),
			data: cliente,
			headers: {
				"Content-Type" : "application/json; charset=utf-8"
			}
		})
		.success(function(data, status, headers, config) {
			console.log('data', data);			
		})
		.error(function(data, status, headers, config) {
			console.error(data);
			console.error(status);
			console.error(headers);
			console.error(config);
		});   
		
		
	};
}