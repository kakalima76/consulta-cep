angular.module('app')
.controller('registerController', ['authService', '$window', '$location', '$filter',  'registerService', function(authService, $window, $location, $filter,registerService){
	var vm = this;
	vm.user = {}
	vm.showError = false;

	authService.setToken($window.location.search.replace('?token=', ''));

	var token = $window.location.search.split('.')[1];
	var usuario = JSON.parse($window.atob(token))

	vm.enviar = function(obj){
		vm.showError = false;
		obj['email'] = usuario.email;
		obj['name'] = $filter('lowercase')(obj['name']);

		if(obj['password'] === vm.compara){
			var promise = registerService.registrar(obj);
			promise
			.then(function(data){
				$location.path('/login/sucesso');
			})
			.catch(function(err){

				vm.showError = true;

				if(err.status === 409){
					vm.message = err.data.errmsg;
					return;
				}
				
				vm.message = err.data.message;
				
			});

			return;


		}else{
			vm.showError = true;
			vm.message = 'Senhas não conferem'
			vm.user.password = null;
			vm.compara = null;

			return;
		}
		
	}
	
}]);