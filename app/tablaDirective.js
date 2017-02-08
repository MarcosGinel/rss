angular.module("nuestroRSS").directive("tablaResultados", function() {
	return {
		restrict: 'AE',
		templateUrl: "views/tabla.html",
		controller: "tablaController",
		scope: {
			misPosts: '@'
		}
	}
});