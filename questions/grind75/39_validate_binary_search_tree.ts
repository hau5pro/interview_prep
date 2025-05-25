// https://leetcode.com/problems/validate-binary-search-tree/
// #binary_tree #in_order

import { TreeNode } from "../../data_structures/tree_node";

async function g75_39() {
  // script here
  const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  const res = isValidBST(tree);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function isValidBST(root: TreeNode | null): boolean {
  let isValid = true;
  let head = -Infinity;

  const traverse = (node: TreeNode | null) => {
    if (!isValid || !node) return;

    traverse(node.left);

    if (head >= node.val) {
      isValid = false;
      return;
    }
    head = node.val;

    traverse(node.right);
  };

  traverse(root);
  return isValid;
}

g75_39().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
