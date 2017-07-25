angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	/*console.log($routeParams);*/

	$routeProvider
		.when('/', {

		})

		.when('/login/acesso', {
			templateUrl: 'template_register/register.html',
			controller:'registerController',
			controllerAs: 'vm'
		})

		.when('/login/atualizar', {
			templateUrl: 'template_update/update.html',
			controller:'updateController',
			controllerAs: 'vm'
		})

		.when('/login/sucesso', {
			templateUrl: 'template_sucesso/sucesso.html',
			controller:'sucessoController',
			controllerAs: 'vm'
		})

		.otherwise({redirecTo: '/'});
}]);