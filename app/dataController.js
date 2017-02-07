angular.module("nuestroRSS").controller("dataController", ['$scope', function($scope) {
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
			if($scope.genero == "0")
				console.log("Pedir datos para usuario con id 1");
			else
				console.log("Pedir datos para usuario con id 2");
		} else {
			console.log("Error, algo salió mal!");
		}
	}
}]);