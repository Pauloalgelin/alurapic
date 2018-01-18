angular.module('alurapic', [
	'ph.directives'
	]);

angular.module('ph.directives', []);

angular
.module('ph.directives')
.directive('myPhoto', myPhoto);

function myPhoto (){
    var directive = {
        restrict: 'E',
        template: '<h3>meu foto</h3>'
    };
    return directive;
};

angular
.module('ph.directives')
.directive('myPhotoUrl', myPhotoUrl);

function myPhotoUrl (){
    var directive = {
        restrict: 'E',
        templateUrl: 'js/directives/my-photo-url.html'
    };
    return directive;
};

angular
.module('ph.directives')
.directive('minhaFoto', minhaFoto);

function minhaFoto (){
	var directive = {
		restrict: 'E',
		transclude: true,
		scope: {
        	titulo: '@'
		},
		templateUrl: 'js/directives/minha-foto.html'
	};
	return directive;
};