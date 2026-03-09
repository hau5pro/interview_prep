// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// #string #array #backtracking

async function g75_60() {
  // script here
  const res = letterCombinations("23");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(N*4^N)
// space O(n)

function letterCombinations(digits: string): string[] {
  const combos: string[] = [];

  const numberToLetterMap = {
    ["2"]: ["a", "b", "c"],
    ["3"]: ["d", "e", "f"],
    ["4"]: ["g", "h", "i"],
    ["5"]: ["j", "k", "l"],
    ["6"]: ["m", "n", "o"],
    ["7"]: ["p", "q", "r", "s"],
    ["8"]: ["t", "u", "v"],
    ["9"]: ["w", "x", "y", "z"],
  };

  const backtrack = (i: number, current: string) => {
    if (current.length === digits.length) {
      combos.push(current);
      return;
    }

    const letters = numberToLetterMap[digits[i]];

    for (const letter of letters) {
      backtrack(i + 1, current + letter);
    }
  };

  if (digits.length > 0) {
    backtrack(0, "");
  }

  return combos;
}

g75_60().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
