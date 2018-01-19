angular
.module('alurapic.route')
.config(routeConfig);

function routeConfig($routeProvider) {
	$routeProvider
	.when('/fotos', {
		controller: 'FotosController',
		templateUrl: 'partials/fotos.html'
	})
	.when('/fotos/new', {
		templateUrl: 'partials/fotos-new.html'
	})
	.otherwise({redirectTo:'/fotos'});
};