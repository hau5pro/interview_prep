// https://leetcode.com/problems/maximum-subarray/
// #array

async function g75_25() {
  // script here
  const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function maxSubArray(nums: number[]): number {
  let local = 0;
  let global = -Infinity;

  for (const num of nums) {
    local = Math.max(num, local + num);
    if (local > global) {
      global = local;
    }
  }

  return global;
}

// time O(n^2)
// space O(1)

// function maxSubArray(nums: number[]): number {
//   let max = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let sum = nums[i];

//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j];
//       max = Math.max(sum, max, nums[j]);
//     }
//   }

//   return max;
// }

g75_25().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
