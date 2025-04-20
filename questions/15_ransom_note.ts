// https://leetcode.com/problems/ransom-note
// #string

async function script15() {
  // script here
  const res = canConstruct("aa", "aab");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: { [letter: string]: number } = {};
  let result = true;

  for (const char of magazine) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }

  for (const char of ransomNote) {
    // false when undefined or 0
    if (map[char]) {
      map[char] = map[char] - 1;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script15().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
