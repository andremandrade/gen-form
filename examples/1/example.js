app = angular.module('demo',['RecursionHelper', 'GenForm']);
		app.controller('DemoController', DemoController);

function DemoController($scope){

	this.template = {
				name:"root",
				type:"Object",
				children:[]
			}

	this.newNode = {
				parent: "",
				name: "",
				type: "",
				children: []
			}

	this.finalJson = {};

	this.possibleParents = ["root"];

	this.addNode = function(node){
		
		addChildOnParent(node, this.template);
		
		if(node.type == "Object"){
			this.possibleParents.push(node.name);
		}
		this.newNode = {
				parent: "",
				name: "",
				type: "",
				children: []
			}
	}

	function addChildOnParent(node, parent){
		if (node.parent==parent.name){
			parent.children.push(node);
		} else {
			for (var i=0; i < parent.children.length; i++){
				addChildOnParent(node, parent.children[i]);
			}
		}
	}

}