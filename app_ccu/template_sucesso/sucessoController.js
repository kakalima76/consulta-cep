angular.module('app')
.controller('sucessoController', ['$window', '$location', function($window, $location){
	var vm = this;

	vm.redirecionar = function(){
		$window.open('https://ccu-desempenho.herokuapp.com/');
		$window.close();
	}
	
}]);