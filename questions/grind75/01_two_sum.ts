// https://leetcode.com/problems/two-sum/description/
// #array

async function g75_01() {
  // script here
  const res = twoSum([2, 7, 11, 15], 9);
  console.log(res);

  console.log("done");
  process.exit(0);
}

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

g75_01().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
