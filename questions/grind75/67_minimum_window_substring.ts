// https://leetcode.com/problems/minimum-window-substring/
// #sliding_window

async function g75_67() {
  // script here
  const res = minWindow("ADOBECODEBANC", "ABC");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)

function isIncluded(
  current: Map<string, number>,
  target: Map<string, number>
): boolean {
  for (const [char, count] of target)
    if (!(current.has(char) && current.get(char) >= count)) return false;

  return true;
}

function minWindow(s: string, t: string): string {
  let l = 0;
  let ans = "";
  let min = Infinity;
  let window = new Map();
  let target = new Map();

  for (let char of t) {
    target.set(char, (target.get(char) || 0) + 1);
  }

  for (let r = 0; r < s.length; r++) {
    window.set(s[r], (window.get(s[r]) || 0) + 1);

    while (isIncluded(window, target)) {
      if (r - l + 1 < min) {
        min = r - l + 1;
        ans = s.slice(l, r + 1);
      }

      window.set(s[l], (window.get(s[l]) || 0) - 1);
      l++;
    }
  }
  return ans;
}

g75_67().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
