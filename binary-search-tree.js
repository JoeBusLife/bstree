class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
		const newNode = new Node(val)
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		let curr = this.root;
		while (true) {
			if (val < curr.val) {
				if (curr.left) curr = curr.left;
				else {
					curr.left = newNode;
					return this;
				}
			} else if (val > curr.val) {
				if (curr.right) curr = curr.right;
				else {
					curr.right = newNode;
					return this;
				}
			}
		}
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr = this.root) {
		const newNode = new Node(val)
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		if (val < curr.val) {
			if (curr.left) return this.insertRecursively(val, curr.left);
			else {
				curr.left = newNode;
				return this;
			}
		} else if (val > curr.val) {
			if (curr.right) return this.insertRecursively(val, curr.right);
			else {
				curr.right = newNode;
				return this;
			}
		}
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
		if (!this.root) return;

		let curr = this.root;
		while (true) {
			if (val < curr.val) {
				if (curr.left) curr = curr.left;
				else return;
			} 
			else if (val > curr.val) {
				if (curr.right) curr = curr.right;
				else return;
			}
			else return curr;
		}
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {
		if (!this.root) return;

		if (val < curr.val) {
			if (curr.left) return this.findRecursively(val, curr.left);
			else return;
		} 
		else if (val > curr.val) {
			if (curr.right) return this.findRecursively(val, curr.right);
			else return;
		}
		else return curr;
	
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
		const vals = [];
		
		function traverse(node) {
			vals.push(node.val)
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		if (this.root) traverse(this.root);
		return vals;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
		const vals = [];
		
		function traverse(node) {
			if (node.left) traverse(node.left);
			vals.push(node.val)
			if (node.right) traverse(node.right);
		}

		if (this.root) traverse(this.root);
		return vals;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
		const vals = [];
		
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			vals.push(node.val)
		}

		if (this.root) traverse(this.root);
		return vals;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
		const vals = [];
		if (!this.root) return vals;
		const toVisitQueue = [this.root]
		
		while (toVisitQueue.length){
			let curNode = toVisitQueue.shift();
			vals.push(curNode.val)
			if (curNode.left) toVisitQueue.push(curNode.left);
			if (curNode.right) toVisitQueue.push(curNode.right);
		}
		return vals;
	}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
