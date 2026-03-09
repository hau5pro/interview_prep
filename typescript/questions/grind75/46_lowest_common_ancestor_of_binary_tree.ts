// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// #binary_tree #dfs

import { TreeNode } from "../../data_structures/tree_node";

async function g75_46() {
  // script here
  const p = new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  );
  const q = new TreeNode(1, new TreeNode(0), new TreeNode(8));
  const tree = new TreeNode(3, p, q);

  const res = lowestCommonAncestor(tree, p, q);
  console.log(res);
  console.log("done");
  process.exit(0);
}

// time O(N)
// space O(N)

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  if (root === p || root === q) return root;

  const left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
  const right: TreeNode | null = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;

  return left || right;
}

// function lowestCommonAncestor(
//   root: TreeNode | null,
//   p: TreeNode | null,
//   q: TreeNode | null
// ): TreeNode | null {
//   let lca = root;
//   let pFound = false,
//     qFound = false;

//   const dfs = (
//     node: TreeNode | null,
//     target: TreeNode | null,
//     path: TreeNode[],
//     found: boolean
//   ) => {
//     if (node === null) {
//       return;
//     }

//     if (node === target) {
//       found = true;
//       path.push(node);
//       return;
//     }

//     if (found) {
//       path.push(node);
//       return;
//     }

//     dfs(node.left, target, path, found);
//     dfs(node.right, target, path, found);
//   };

//   let pPath = [];
//   let qPath = [];

//   dfs(root, p, pPath, pFound);
//   dfs(root, q, qPath, qFound);

//   while (pPath.length > 0 && qPath.length > 0) {
//     let pNode = pPath.pop();
//     let qNode = qPath.pop();

//     if (pNode === qNode) {
//       lca = pNode;
//     }
//   }

//   return root;
// }

g75_46().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
