function AjaxCtrl($scope, $http) {
   
   $scope.listAll = function(){
		console.log("listAll");
		
		$http({		
			url: "/rex/cliente/listAll",
			dataType: "json",
			method: "GET",
			//data: JSON.stringify({"pacienteId": 1}),
			headers: {
				"Content-Type" : "application/json; charset=utf-8"
			}
		})
		.success(function(data, status, headers, config) {
			console.log('data', data);		
			$scope.clientes = data;
		})
		.error(function(data, status, headers, config) {
			console.error(data);
			console.error(status);
			console.error(headers);
			console.error(config);
		});   
		
   };
   
}