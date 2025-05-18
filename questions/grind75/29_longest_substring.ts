// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// #string #sliding_window

async function g75_29() {
  // script here
  const res = lengthOfLongestSubstring("abcabcbb");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function lengthOfLongestSubstring(s: string): number {
  let max = 0;

  let start = 0;
  let end = 0;
  let map = new Map<string, number>();

  if (s.length === 1) return 1;

  while (start <= end && end < s.length) {
    const char = s[end];

    if (map.has(char)) {
      const pos = map.get(char);

      if (pos >= start) {
        start = pos + 1;
      } else {
        max = Math.max(end - start + 1, max);
      }

      map.set(char, end);
    } else {
      map.set(char, end);
      max = Math.max(end - start + 1, max);
    }
    end++;
  }

  return max;
}

g75_29().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
