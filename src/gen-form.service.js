
angular.module('GenForm')
  .service('GenFormLoader', function($http) {
    return {
      loadTemplate: function(updateTemplate, templateName) {
        return $http.get(templateName).then(function(response) {
          updateTemplate(response.data);
        });
      }
    };
  });
