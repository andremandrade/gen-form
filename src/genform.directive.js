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
		    template: '<div ng-repeat="field in template"> <div ng-switch="field.multivalued"> <div ng-switch-when="true" ng-init="model[field.id]=[]"> <form> <div ng-switch="field.type"> <div ng-switch-when="object" ng-init="temp={}"> <h4 style="margin-left:{{indent}}px">{{field.label}} list</h4> <gen-form template="field.children" model="temp" indent="indent+20"></gen-form> <button ng-click="model[field.id].push(temp); temp={}" class="btn btn-success" style="margin-left:{{indent+20}}px">Add New</button> <table class="table" style="margin-left:{{indent+20}}px"> <thead> <tr> <th ng-repeat="col in field.children">{{col.label}}</th> </tr> </thead> <tbody> <tr ng-repeat="value in model[field.id]"> <td ng-repeat="col in value">{{col}}</td> </tr> </tbody> </table> </div> <div ng-switch-default ng-init="temp={}"> <h4 style="margin-left:{{indent}}px">{{field.label}} list</h4> <gen-field field="field" model="temp" indent="indent+20"></gen-field> <button ng-click="model[field.id].push(temp[field.id]); temp={}" class="btn btn-success" style="margin-left:{{indent+20}}px">Add New</button> <table class="table" style="margin-left:{{indent+20}}px"> <thead> <tr> <th>Added values</th> </tr> </thead> <tbody> <tr ng-repeat="value in model[field.id]"> <td>{{value}}</td> </tr> </tbody> </table> </div> </div> </form> </div> <div ng-switch-default> <div ng-switch="field.type"> <div ng-switch-when="object" ng-init="model[field.id]={}"> <h4 style="margin-left:{{indent}}px">{{field.label}}</h4> <gen-form template="field.children" model="model[field.id]" indent="indent+20"></gen-form> </div> <div ng-switch-default> <gen-field field="field" model="model" indent="indent"></gen-field> </div> </div> </div> </div> </div>',
		    compile: function(element) {
	        	return RecursionHelper.compile(element);
	    	}
	  	};
	});
