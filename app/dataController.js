angular.module("nuestroRSS").controller("dataController", ['$scope', 'ApiService', function($scope, ApiService) {
	$scope.camposRellenos = false;
	$scope.nombre = "";
	$scope.apellido = "";
	$scope.genero = "0";
	
	$scope.compruebaCamposRellenos = function(nombre, apellido) {
		if(nombre != "" || apellido != "") 
			return true;
		return false;
	}

	$scope.$on("enviandoGenero", function(event, data) {
		$scope.genero = data;
		console.log($scope.genero);
	});

	$scope.pedirDatos = function() {
		if($scope.compruebaCamposRellenos($scope.nombre, $scope.apellido)) {
			ApiService.getDatos($scope.genero).then(
				function(data){
					console.log(data);
				}, function(error){
					console.log(error);
			});
		} else {
			console.log("Error, algo salió mal!");
		}
	}
}]);