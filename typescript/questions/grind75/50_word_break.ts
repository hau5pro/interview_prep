// https://leetcode.com/problems/word-break/
// #dp #bottom_up

async function g75_50() {
  // script here
  const res = wordBreak("leetcode", ["leet", "code"]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n * m * k)
// n = s.length
// m = wordDict.length
// k = average word length in wordDict
// space O(n)

function wordBreak(s: string, wordDict: string[]): boolean {
  const memo: boolean[] = new Array(s.length + 1).fill(false);
  memo[s.length] = true; // base case

  for (let i = s.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      let curr = s.substring(i, i + word.length);

      // If current word matches and the rest of the string can be segmented
      if (curr === word && memo[i + word.length]) {
        memo[i] = true;
        break; // no need to check other words
      }
    }
  }

  return memo[0];
}

g75_50().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
