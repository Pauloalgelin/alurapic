angular.module('minhasDiretivas', [])
	.directive('meuPainel', meuPainel);

function meuPainel() {
	var directive = {
		restrict: "E",
       	transclude: true,
		scope: {
            titulo: '@'
	    },
    	templateUrl: 'js/directives/meu-painel.html'
	};
	return directive;
};