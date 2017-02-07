angular.module("nuestroRSS").controller("generoController", ['$scope', function($scope) {
	$scope.genero = "0";

	$scope.enviaGenero = function() {
		$scope.$emit("enviandoGenero", $scope.genero);
	}	
}]);