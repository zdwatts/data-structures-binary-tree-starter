const { TreeNode } =require('./tree_node')

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function inOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  let left = root.left;
  let right = root.right;
  let leftSorted = inOrderArray(left);
  console.log(root.val);
  let rightSorted = inOrderArray(right);
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...leftSorted,root.val, ...rightSorted]
}

function postOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];

  // get the array for visiting the left node
  // get the array for visiting the right node
   let left = root.left;
   let right = root.right;
   let leftSorted = postOrderArray(left);
   let rightSorted = postOrderArray(right);
   console.log(root.val)

  // return the left array concatenated with the right array
  //   concatenated with the root value
  return [...leftSorted, ...rightSorted, root.val]
}

// let node = new TreeNode()
module.exports = {
  inOrderArray,
  postOrderArray
};
