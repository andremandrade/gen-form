angular.module('GenForm').
	directive('genForm', function(RecursionHelper) {
	 	return {
		  	restrict: 'E',
		  	scope: {
		  	  indent: '=indent',
		  	  template: '=template',
		      model: '=model'
		    },
		    //templateUrl: '/src/gen-form.html',
		    template: '<div ng-switch="template.type"> <div ng-switch-when="Object" ng-init="model[template.name]={}"> <div ng-switch="template.name"> <div ng-switch-when="root"> <div ng-repeat="ch in template.children"> <gen-form template="ch" model="model[template.name]" indent="indent"></gen-form> </div> </div> <div ng-switch-default> <h4 style="margin-left:{{indent}}px">{{template.name}}</h4> <div ng-repeat="ch in template.children"> <gen-form template="ch" model="model[template.name]" indent="indent+20"></gen-form> </div> </div> </div> </div> <div ng-switch-default> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{template.name}}">{{template.name}}</label> <input class="form-control" type="text" id="{{template.name}}" ng-model="model[template.name]"></input> </div> </div> </div>',
		    compile: function(element) {
	        	return RecursionHelper.compile(element);
	    	}
	  	};
	});
