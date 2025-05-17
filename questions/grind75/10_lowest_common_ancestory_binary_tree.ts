// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
// #binary_tree #dfs

import { TreeNode } from "../../data_structures/tree_node";

async function g75_10() {
  // script here
  const res = lowestCommonAncestor(
    {
      val: 6,
      left: {
        val: 2,
        left: {
          val: 0,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: {
            val: 3,
            left: null,
            right: null,
          },
          right: {
            val: 5,
            left: null,
            right: null,
          },
        },
      },
      right: {
        val: 8,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 9,
          left: null,
          right: null,
        },
      },
    },
    {
      val: 2,
      left: null,
      right: null,
    },
    { val: 8, left: null, right: null }
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time: O(log(n))
// space: O(1)

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  return dfs(root, p, q);
}

function dfs(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (p?.val > root?.val && q?.val > root?.val) {
    return dfs(root?.right, p, q);
  } else if (p?.val < root?.val && q?.val < root?.val) {
    return dfs(root?.left, p, q);
  } else {
    return root;
  }
}

g75_10().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
