// https://leetcode.com/problems/string-to-integer-atoi/
// #string

async function g75_52() {
  // script here
  const res = myAtoi("   -042");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(1)

function myAtoi(s: string): number {
  let result = 0;

  s = s.trimStart();

  if (s.length === 0) return result;

  let sign: number;

  switch (s[0]) {
    case "-":
      sign = -1;
      break;
    case "+":
    default:
      sign = 1;
      break;
  }

  let current = "";
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!digits.includes(char)) {
      if (i === 0 && (char === "-" || char === "+")) continue;
      break;
    }

    current += char;
  }

  result = Number(current) * sign;

  if (result > 0) {
    result = Math.min(Math.pow(2, 31) - 1, result);
  } else {
    result = Math.max(Math.pow(-2, 31), result);
  }

  return result;
}

g75_52().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
