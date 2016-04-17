app = angular.module('demo',['RecursionHelper', 'GenForm']);
		app.controller('DemoController', DemoController);

function DemoController(GenFormLoader, $scope){

	$scope.object={};
	$scope.template=[];
	
	$scope.updateTemplate = function(value){
		$scope.template=value;
	}

	GenFormLoader.loadTemplate($scope.updateTemplate, 'form.json');

}