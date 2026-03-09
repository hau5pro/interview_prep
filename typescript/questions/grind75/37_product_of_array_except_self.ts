// https://leetcode.com/problems/product-of-array-except-self/
// #array

async function g75_37() {
  // script here
  const res = productExceptSelf([1, 2, 3, 4]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const result = Array(nums.length).fill(1);

  // compute left
  let left = 1;
  for (let i = 0; i < len; i++) {
    result[i] *= left;
    left *= nums[i];
  }

  // compute right
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

g75_37().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
