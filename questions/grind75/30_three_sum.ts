// https://leetcode.com/problems/3sum/
// #array #two_pointer

async function g75_30() {
  // script here
  const res = threeSum([-1, 0, 1, 2, -1, -4]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n^2)

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = -nums[i];
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const current_sum = nums[left] + nums[right];

      if (current_sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (current_sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

g75_30().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
