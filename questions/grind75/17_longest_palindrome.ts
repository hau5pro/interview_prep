// https://leetcode.com/problems/longest-palindrome/
// #string

async function g75_17() {
  // script here
  const res = longestPalindrome("abccccdd");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

export function longestPalindrome(s: string): number {
  const map: { [letter: string]: number } = {};
  let oddFound = false;
  let result = 0;

  for (const char of s) {
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }

  for (const value of Object.values(map)) {
    if (value % 2 === 0) {
      result += value;
    } else {
      oddFound = true;
      result += value - 1;
    }
  }

  result = oddFound ? result + 1 : result;
  return result;
}

g75_17().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
