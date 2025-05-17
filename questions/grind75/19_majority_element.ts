// https://leetcode.com/problems/majority-element/
// #array

async function script19() {
  // script here
  const res = majorityElement([3, 2, 3]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)
// Boyer-Moore Voting Algorithm
function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// time O(n)
// space O(n)

// function majorityElement(nums: number[]): number {
//   const map: { [number: number]: number } = {};

//   for (let i = 0; i < nums.length; i++) {
//     const val = nums[i];
//     if (map[val]) {
//       map[val] = map[val] + 1;
//     } else {
//       map[val] = 1;
//     }
//   }

//   for (const entry of Object.entries(map)) {
//     if (entry[1] > nums.length / 2) {
//       return Number(entry[0]);
//     }
//   }
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script19().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
