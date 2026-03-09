// https://leetcode.com/problems/subsets/
// #array #backtracking #dfs

async function g75_54() {
  // script here
  const res = subsets([1, 2, 3]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n^2)
// space O(n)

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const subset = [];
  const dfs = (i: number) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    // include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);

    // dont include nums[i]
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);

  return result;
}

g75_54().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
