function inOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  inOrderArray(root.left);
  console.log(root.val);
  inOrderArray(root.right);
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...left, root, ...right];
}

function postOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
}


module.exports = {
  inOrderArray,
  postOrderArray
};
