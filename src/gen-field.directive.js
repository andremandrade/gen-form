angular.module('GenForm')
  .directive('genField', function() {
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        indent: '=indent',
        field: '=field'
      },
      templateUrl: '/src/gen-field.html',
      //template: '<div ng-switch="field.type"> <div ng-switch-when="object" ng-init="model[field.id]={}"> <h4 style="margin-left:{{indent}}px">{{field.label}}</h4> <gen-form template="field.children" model="model[field.id]" indent="indent+20"></gen-form> </div> <div ng-switch-when="text"> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{field.id}}">{{field.label}}</label> <input class="form-control" type="text" id="{{field.id}}" ng-model="model[field.id]" required="{{field.required}}"></input> </div> </div> <div ng-switch-when="date"> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{field.id}}">{{field.label}}</label> <input class="form-control" type="date" id="{{field.id}}" ng-model="model[field.id]" required="{{field.required}}"></input> </div> </div> <div ng-switch-when="datetime"> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{field.id}}">{{field.label}}</label> <input class="form-control" type="datetime" id="{{field.id}}" ng-model="model[field.id]" required="{{field.required}}"></input> </div> </div> <div ng-switch-when="number"> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{field.id}}">{{field.label}}</label> <input class="form-control" type="number" id="{{field.id}}" ng-model="model[field.id]" required="{{field.required}}"></input> </div> </div> <div ng-switch-when="decimal"> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{field.id}}">{{field.label}}</label> <input class="form-control" type="number" step="0.01" id="{{field.id}}" ng-model="model[field.id]" required="{{field.required}}"></input> </div> </div> <div ng-switch-when="checkbox"> <div class="checkbox" style="margin-left:{{indent}}px"> <label><input type="checkbox" id="{{field.id}}" ng-model="model[field.id]" required="{{field.required}}" ></input>{{field.label}}</label> </div> </div> <div ng-switch-when="enum"> <div class="form-group" style="margin-left:{{indent}}px"> <label for="{{field.id}}">{{field.label}}</label> <select id="{{field.id}}" class="form-control" ng-model="model[field.id]" required="{{field.required}}"> <option ng-repeat="option in field.options">{{option}}</option> </select> </div> </div> </div>',
    };
  });
