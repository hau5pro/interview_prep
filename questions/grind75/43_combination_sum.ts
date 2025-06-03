// https://leetcode.com/problems/combination-sum/
// #dfs #backtracking

async function g75_43() {
  // script here
  const res = combinationSum([2, 3, 6, 7], 7);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(2^n), n = depth of decision tree which is equal to target
// space O(t/d), t is target, d is the smallest candidate

function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const dfs = (i: number, curr: number[], total: number) => {
    if (total === target) {
      res.push([...curr]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    // 1st decision
    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i]);

    // exclusive decision
    curr.pop();
    dfs(i + 1, curr, total);
  };

  dfs(0, [], 0);

  return res;
}

g75_43().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
