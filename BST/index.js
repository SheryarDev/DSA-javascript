class Node {
  constructor(val) {
    this.right = null;
    this.left = null;
    this.value = val;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }

  makeTree(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //Insert new Node in Tree

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right === newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // search Node in BST

  searchNode(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.searchNode(root.left, val);
    } else {
      return this.searchNode(root.right, val);
    }
  }

  //Depth First Search(DFS Traversal)

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  IneOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  PostOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  //Depth First Search(DFS Traversal)

  bfsTraversal() {
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }

      if (current.left) {
        queue.push(current.right);
      }
      console.log(current.value);
    }
  }

  // Min value in BST

  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  //Max value in BST

  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.minValue(root.right);
    }
  }

  //delete Node in BST

  deleteNode(root,value){
    if(root===null){
        return null
    }

    if(val<root.value){
        root.left=this.deleteNode(root.left,value)
    }else if(value > root.value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null;
        }else if(!root.left){
            return root.right;
        }else if(!root.right){
            return root.left;
        }

        root.value=this.minValue(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
  }
}
