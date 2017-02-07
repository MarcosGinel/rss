angular.module("nuestroRSS").service("ApiService", ['$http', 'constantes', function($http, constantes) {
	this.getDatos = function(genero) {
		return $http.get(constantes[genero]);
	}
}]);