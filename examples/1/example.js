
app = angular.module('demo', [ 'RecursionHelper', 'GenForm' ]);

app.controller('DemoController', function DemoController($scope) {

  var self = this;

  self.template = [];
  self.finalJson = {};
  self.possibleParents = [''];

  self.addNode = function(node) {
    var parentIdspl = node.parentId.split('.');
    if (node.options) {
      node.options = node.options.split(/\s*\,\s*/);
    }

    if (!node.parentId) {
      self.template.push(node);
      self.addParent(node);
    }
    else {
      var level = self.template;
      for (var i=0; i < parentIdspl.length; i++) {
        var nodeParentId = parentIdspl[i];
        for (var j=0; j < level.length; j++) {
          var parent = level[j];
          if (nodeParentId == parent.id) {
            if (i == (parentIdspl.length - 1)) {
              parent.children.push(node);
              self.addParent(node);
            }
            else {
              level = parent.children;
            }
            break;
          }
        }
      }
    }

    self.createNewNode();
  };

  self.addParent = function(node) {
    if (node.type === 'object') {
      self.possibleParents.push(node.parentId ? node.parentId + '.' + node.id : node.id);
    }
  };

  self.createNewNode = function() {
    self.newNode = {
      parentId: '',
      id: '',
      label: '',
      type: 'text',
      multivalued: false,
      required: false,
      children: []
    };
  };

  self.createNewNode();

  function addChildOnParent(node, parent) {
    if (node.parent === parent.name) {
      parent.children.push(node);
    }
    else {
      for (var i=0; i < parent.children.length; i++) {
        addChildOnParent(node, parent.children[i]);
      }
    }
  }
});
