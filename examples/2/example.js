app = angular.module('demo',['RecursionHelper', 'GenForm']);
		app.controller('DemoController', DemoController);

function DemoController(GenFormLoader, $scope){

	$scope.object={
		root: {}
	};

	GenFormLoader.loadTemplate('form.json').then(
		function(response){
			$scope.template = response.data;
		});

}