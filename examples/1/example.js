app = angular.module('demo',['RecursionHelper', 'GenForm']);
		app.controller('DemoController', DemoController);

function DemoController($scope){

	this.template = []

	this.newNode = {
		parentId: '',
		id: '',
		label: '',
		type: '',
		multivalued: false,
		required: false,
		children: []
	}

	this.possibleParents = [];

	this.finalJson = {};

	this.addNode = function(node){
		parentIdspl = node.parentId.split('.');
		if(node.options){
			node.options = node.options.split(',');
		}

		if(!node.parentId){
			this.template.push(node);
			addPossibleParent(node, this.possibleParents);
		}
		else{
			level = this.template;
			for (var i = 0; i < parentIdspl.length; i++) {
				nodeParentId = parentIdspl[i];
				for (var j = 0; j < level.length; j++) {
					parent = level[j];
					if (nodeParentId == parent.id){
						if (i == (parentIdspl.length - 1)) {
							parent.children.push(node);
							addPossibleParent(node, this.possibleParents);
						}
						else{
							level = parent.children
						}
						break;
					}
				}
			}
		}
		
		this.newNode = {
			parentId: '',
			id: '',
			label: '',
			type: '',
			multivalued: false,
			required: false,
			children: []
		}
	}

	function addPossibleParent(node, possibleParents){
		if(node.type == 'object')
			possibleParents.push(node.parentId ? node.parentId + '.' + node.id : node.id);
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