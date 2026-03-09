// https://leetcode.com/problems/valid-parentheses/
// #stack

async function g75_02() {
  // script here
  const res = isValid("([)]");
  console.log(res);

  console.log("done");
  process.exit(0);
}

function isValid(s: string): boolean {
  const stack: string[] = [];
  const brackets: { [closing: string]: string } = {
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isClosing = brackets.hasOwnProperty(char);

    if (isClosing) {
      const opening = stack.pop();

      if (brackets[char] !== opening) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

g75_02().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
