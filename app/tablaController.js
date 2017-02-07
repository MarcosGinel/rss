angular.module("nuestroRSS").controller("tablaController", ['$scope', function($scope) {
	$scope.$on("datosPreparados", function(event, data) {
		$scope.misPosts = data;
	});
	
}]);