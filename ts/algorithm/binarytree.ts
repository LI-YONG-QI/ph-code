class node {
  val: number;
  left?: node;
  right?: node;
  constructor(val: number, left?: node, right?: node) {
    this.val = val;
    if (left) {
      this.left = left;
    }
    if (right) {
      this.right = right;
    }
  }
}

function make(layer: number, val: number): node {
  if (layer > 1) {
    var left = make(layer - 1, val * 2);
    var right = make(layer - 1, val * 2 + 1);
    var root = new node(val, left, right);
  } else {
    var root = new node(val);
  }
  return root;
}

function printTreePreOrder(root: node) {
  console.log(root.val);
  if (root.left) printTreePreOrder(root.left);
  if (root.right) printTreePreOrder(root.right);
}
function printTreePostOrder(root: node) {
  if (root.left) printTreePostOrder(root.left);
  if (root.right) printTreePostOrder(root.right);
  console.log(root.val);
}
function printTreeInOrder(root: node) {
  if (root.left) printTreeInOrder(root.left);
  console.log(root.val);
  if (root.right) printTreeInOrder(root.right);
}
// console.log(`${r.val}`);
// console.log(`${r.left?.val} ${r.right?.val}`);
// console.log(
//   `${r.left?.left?.val} ${r.left?.right?.val} ${r.right?.left?.val} ${r.right?.right?.val}`
// );
// console.log(r.right?.left?.left?.val);

var r = make(3, 1);
//printTreePreOrder(r);
//printTreePostOrder(r);
printTreeInOrder(r);
//4 5 2 6 7 3 1
