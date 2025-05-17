// https://leetcode.com/problems/valid-palindrome
// #string

async function script5() {
  // script here
  const res = isPalindrome("ab_a");
  console.log(res);

  console.log("done");
  process.exit(0);
}

function isPalindrome(s: string): boolean {
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return newStr === newStr.split("").reverse().join("");
}

// My Solution
// function isPalindrome(s: string): boolean {
//   let res = true;

//   const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

//   if (filteredString.length === 0) {
//     return true;
//   }

//   const isEven = filteredString.length % 2 === 0;

//   const forwards: string[] = [];
//   const backwards: string[] = [];

//   if (isEven) {
//     const midWay = filteredString.length / 2;
//     for (let i = 0; i < filteredString.length; i++) {
//       if (i < midWay) {
//         forwards.push(filteredString[i]);
//       } else {
//         backwards.push(filteredString[i]);
//       }
//     }

//     backwards.reverse();
//   } else {
//     const midWay = Math.round(filteredString.length / 2) - 1;
//     for (let i = 0; i < filteredString.length; i++) {
//       if (i < midWay) {
//         forwards.push(filteredString[i]);
//       } else if (i === midWay) {
//         continue;
//       } else {
//         backwards.push(filteredString[i]);
//       }
//     }

//     backwards.reverse();
//   }

//   for (let i = 0; i < forwards.length; i++) {
//     if (forwards[i] !== backwards[i]) {
//       res = false;
//       break;
//     }
//   }

//   return res;
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script5().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
