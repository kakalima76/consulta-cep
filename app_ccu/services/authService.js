angular.module('app')
.service('authService', function(){
	var token;

	var setToken = function(value){
		token = value;
	}

	var getToken = function(){
		return token;
	}

	return {
		setToken: setToken,
		getToken: getToken
	}


})