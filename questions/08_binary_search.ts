// https://leetcode.com/problems/binary-search/
// #binary_search

async function script8() {
  // script here
  const res = search([-1, 0, 3, 5, 9, 12], 9);
  console.log(res);

  console.log("done");
  process.exit(0);
}

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script8().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
