angular.module('GenForm').service('GenFormLoader', function($http){
	
	loadTemplate = function(templateName){
		return $http.get(templateName);
	}

	return {
		loadTemplate: loadTemplate
	}
});