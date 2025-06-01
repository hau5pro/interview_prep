// https://leetcode.com/problems/search-in-rotated-sorted-array/
// #binary_search

async function g75_42() {
  // script here
  const res = search([4, 5, 6, 7, 0, 1, 2], 0);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(log(n))
// space O(1)

export function search(nums: number[], target: number): number {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [lv, mv, rv] = [nums[left], nums[mid], nums[right]];

    if (mv === target) {
      return mid;
    }

    if (lv <= mv) {
      // left
      if (target >= lv && target < mv) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right
      if (target > mv && target <= rv) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

g75_42().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
