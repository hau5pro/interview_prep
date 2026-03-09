// https://leetcode.com/problems/sort-colors/
// #array #sorting

async function g75_49() {
  // script here
  const res = [2, 0, 2, 1, 1, 0];
  console.log(res);
  sortColors(res);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// dutch national flag algo
// time O(n)
// space O(1)

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// insertion sort
// time O(n^2)  worst case
// space O(1)

/**
 Do not return anything, modify nums in-place instead.
 */
// function sortColors(nums: number[]): void {
//   for (let i = 1; i < nums.length; i++) {
//     let j = i;

//     while (j > 0 && nums[j] < nums[j - 1]) {
//       [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
//       j--;
//     }
//   }
// }

g75_49().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
