angular.module('GenForm').
	directive('genForm', function(RecursionHelper) {
	 	return {
		  	restrict: 'E',
		  	scope: {
		  	  indent: '=indent',
		  	  template: '=template',
		      model: '=model'
		    },
		    templateUrl: '/src/gen-form.html',
		    //template: '<div ng-switch="child.type"> <div ng-switch-when="Object" ng-init="model[child.name]={}"> <h4 style="margin-left:{{indent}}px">{{child.name}}</h4> <div ng-repeat="ch in child.children"> <gen-form child="ch" model="model[child.name]" indent="indent+20"></gen-form> </div> </div> <div ng-switch-default> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{child.name}}">{{child.name}}</label> <input class="form-control" type="text" id="{{child.name}}" ng-model="model[child.name]"></input> </div> </div> </div>',
		    compile: function(element) {
	        	return RecursionHelper.compile(element);
	    	}
	  	};
	});
