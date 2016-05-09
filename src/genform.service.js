angular.module('GenForm').service('GenFormLoader', ['$http',function($http){
	
	loadTemplate = function(updateTemplate, templateName){
		return $http.get(templateName).then(function(response){
			updateTemplate(response.data);
		});
	}

	return {
		loadTemplate: loadTemplate
	}
}]);