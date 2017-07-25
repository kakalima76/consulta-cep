angular.module('app')
.service('registerService', ['$http', 'authService', function($http, authService){
	var registrar = function(obj){
		return $http.post('https://credenciais.herokuapp.com/register/?token=' + authService.getToken(), obj);
	}

	var alterar = function(obj){
		return $http.post('https://credenciais.herokuapp.com/update/?token=' + authService.getToken(), obj);
	}

	return {
		registrar: registrar,
		alterar: alterar
	}

}]);	
