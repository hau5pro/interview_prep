// https://leetcode.com/problems/longest-palindromic-substring/
// #string

async function g75_56() {
  // script here
  const res = longestPalindrome("babad");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

export function longestPalindrome(s: string): string {
  let result = "";
  let maxLength = 0;

  const expand = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      if (right - left + 1 > maxLength) {
        result = s.slice(left, right + 1);
        maxLength = result.length;
      }

      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // odd length
    let left = i;
    let right = i;

    expand(left, right);

    // even length
    left = i;
    right = i + 1;

    expand(left, right);
  }

  return result;
}

g75_56().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
