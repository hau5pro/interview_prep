// https://leetcode.com/problems/partition-equal-subset-sum/
// #dp

async function g75_51() {
  // script here
  const res = canPartition([1, 5, 11, 5]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n*m)
// m is length of possible
// space O(m)

function canPartition(nums: number[]): boolean {
  let result = false;

  let total = nums.reduce((sum, num) => sum + num, 0);
  if (total % 2 !== 0) return false;

  let target = total / 2;
  const possible = new Array(target + 1).fill(false);
  possible[0] = true;

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      if (possible[i]) continue; // already know i is reachable
      if (possible[i - num]) possible[i] = true; // if i - num is reachable, i is reachable
      if (possible[target]) return true; // target reachable
    }
  }

  return result;
}

g75_51().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
