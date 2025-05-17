// https://leetcode.com/problems/add-binary/
// #string

async function script20() {
  // script here
  const res = addBinary("11", "1");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function addBinary(a: string, b: string): string {
  let max = Math.max(a.length, b.length);
  let carry = 0;
  let result = "";

  for (let i = 0; i < max; i++) {
    const x = getValue(a, i);
    const y = getValue(b, i);

    const sum = x + y + carry;

    if (sum === 3) {
      carry = 1;
      result = 1 + result;
    } else if (sum === 2) {
      carry = 1;
      result = 0 + result;
    } else if (sum === 1) {
      carry = 0;
      result = 1 + result;
    } else {
      carry = 0;
      result = 0 + result;
    }
  }

  if (carry) {
    result = carry + result;
    carry = 0;
  }

  return result;
}

function getValue(a: string, i: number): number {
  return Number(a[a.length - 1 - i] ?? 0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script20().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
