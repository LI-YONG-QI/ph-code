class LinkedNode {
  next?: LinkedNode;
  constructor(public val: number, next?: LinkedNode) {
    if (next) {
      this.next = next;
    }
  }
}

function add(node: LinkedNode, val: number, newNode: number) {
  if (node.val == val) {
    node.next = new LinkedNode(newNode, node.next);
    return;
  }
  if (node.next) {
    add(node.next, val, newNode);
  }
}

function del(node: LinkedNode, val: number) {
  if (!node.next) return;
  if (node.next?.val == val) {
    node.next = node.next.next;
    return;
  }
  if (node.next) {
    del(node.next, val);
  }
}

function adds(list: number[]): LinkedNode {
  var temp = new LinkedNode(list[0]);
  list.shift();
  if (list.length > 0) {
    temp.next = adds(list);
  }
  return temp;
}

function print(node: LinkedNode) {
  console.log(node.val);
  if (node.next) {
    print(node.next);
    return;
  }
  console.log();
}

var root = adds([1, 2, 111,4]);
print(root);

add(root, 2, 3)
print(root);

del(root, 111);
print(root);
