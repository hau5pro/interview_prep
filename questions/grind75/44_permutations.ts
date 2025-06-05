// https://leetcode.com/problems/permutations/
// #backtracking

async function g75_44() {
  // script here
  const res = permute([1, 2, 3]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n x n!)
// space O(n x n!)

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const len = nums.length;

  const path: number[] = [];
  const selected: boolean[] = Array(len).fill(false);

  const backtrack = () => {
    // condition met
    if (path.length === len) {
      result.push(path.slice());
      return;
    }

    // explore choices for current position
    for (let i = 0; i < len; i++) {
      if (selected[i] === true) {
        continue;
      }

      // choose
      path.push(nums[i]);
      selected[i] = true;

      // explore further
      backtrack();

      // undo choice
      path.pop();
      selected[i] = false;
    }
  };

  backtrack();

  return result;
}

g75_44().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
