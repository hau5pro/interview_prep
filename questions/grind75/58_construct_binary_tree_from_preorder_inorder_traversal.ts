// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// #binary_tree

import { TreeNode } from "../../data_structures/tree_node";

async function g75_() {
  // script here
  const res = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n^2)

// preorder: root, left, right
// inorder: left, root, right

// first val in preorder is root
// can partition preorder array by looking at inorder
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) {
    return null;
  }

  const root = preorder.shift();
  const index = inorder.indexOf(root);
  const leftPartition = inorder.slice(0, index);
  const rightPartition = inorder.slice(index + 1);

  const tree = new TreeNode(root);
  tree.left = buildTree(preorder, leftPartition);
  tree.right = buildTree(preorder, rightPartition);

  return tree;
}

g75_().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
