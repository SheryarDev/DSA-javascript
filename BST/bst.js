class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    if (this.root === null) return true;
  }

  //Insert new Node in Tree

  insertNode(root, newNode) {
    if (root.val > newNode.val) {
      //repeat the same process for left subtree
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        //repeat the same process for right subtree
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  makeTree(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // search Node in BST

  searchNode(root, val) {
    if (root === null) {
      return false;
    } else if (root.val === val) {
      return true;
    } else if (root.val > val) {
      return this.searchNode(root.left, val);
    } else {
      return this.searchNode(root.right, val);
    }
  }

  //Depth First Search
  //preOrder
  preOrder(root) {
    if (root) {
      console.log(root.val);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  //inorder
  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.val);
      this.preOrder(root.right);
    }
  }

  //postOrder
  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log("postorder", root.val);
    }
  }

  bfsTraversal() {
    let queue = [];
    //push the root in queue
    queue.push(this.root);

    while (queue.length) {
      // console.log("quueu",queue)
      //removed the current element from queu
      let current = queue.shift();
      //if currentNode has left child push it in queue
      if (current.left) {
        queue.push(current.left);
      }
      //if currentNode has right child push it in queue
      if (current.right) {
        queue.push(current.right);
      }
      //console.log the value
      console.log(current.value);
    }
  }
}

const bst = new BST();
bst.makeTree(21);
bst.makeTree(4);
bst.makeTree(23);
bst.makeTree(32);
bst.makeTree(6);
bst.makeTree(12);
bst.makeTree(53);
bst.makeTree(82);
console.log("seach", bst.searchNode(12));
bst.postOrder(bst.root);
bst.preOrder(bst.root);
bst.inOrder(bst.root);
