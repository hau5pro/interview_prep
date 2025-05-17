// https://leetcode.com/problems/contains-duplicate/
// #array

async function g75_24() {
  // script here
  const res = containsDuplicate([2, 14, 18, 22, 22]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)
function containsDuplicate(nums: number[]): boolean {
  const lookup = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (lookup.has(nums[i])) return true;
    lookup.add(nums[i]);
  }

  return false;
}

// time O(log(n)) its slow for some reason?
// space O(1)

// function containsDuplicate(nums: number[]): boolean {
//   nums.sort((a, b) => a - b);

//   let prev: number;
//   let containsDuplicate = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       prev = nums[i];
//     } else {
//       if (nums[i] === prev) {
//         containsDuplicate = true;
//         break;
//       } else {
//         prev = nums[i];
//       }
//     }
//   }

//   return containsDuplicate;
// }

g75_24().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
