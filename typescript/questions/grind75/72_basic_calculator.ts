// https://leetcode.com/problems/basic-calculator/
// #stack

async function g75_72() {
  // script here
  const res = calculate("(1+(4+5+2)-3)+(6+8)");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function calculate(s: string): number {
  let i = 0;

  const helper = (): number => {
    let stack: number[] = [];
    let num = 0;
    let sign = 1;

    while (i < s.length) {
      const char = s[i];

      if (char === ' ') {
        i++;
      } else if (char >= '0' && char <= '9') {
        num = 0;
        while (i < s.length && s[i] >= '0' && s[i] <= '9') {
          num = num * 10 + Number(s[i]);
          i++;
        }
        stack.push(sign * num);
      } else if (char === '+') {
        sign = 1;
        i++;
      } else if (char === '-') {
        sign = -1;
        i++;
      } else if (char === '(') {
        i++;
        num = helper(); // recursively evaluate inner
        stack.push(sign * num);
      } else if (char === ')') {
        i++;
        break;
      }
    }

    return stack.reduce((a, b) => a + b, 0);
  };

  return helper();
}

// function calculate(s: string): number {
//   const plus = "+",
//     minus = "-";
//   const empty = " ";
//   const openB = "(",
//     closeB = ")";

//   enum char_type {
//     empty,
//     number,
//     operator,
//     bracket,
//   }

//   const read = (char: string): char_type => {
//     if (/^\d$/.test(char)) {
//       return char_type.number;
//     }

//     switch (char) {
//       case empty:
//         return char_type.empty;
//       case plus:
//       case minus:
//         return char_type.operator;
//       case openB:
//       case closeB:
//         return char_type.bracket;
//       default:
//         return char_type.empty;
//     }
//   };

//   const findClosingBracketIndex = (start: number): number => {
//     let result = -1;

//     let opens = 0;
//     let closes = 0;

//     for (let i = start; i < s.length; i++) {
//       const char = s[i];

//       if (char === openB) {
//         opens++;
//       }
//       if (char === closeB) {
//         closes++;
//       }

//       if (opens > 0 && opens === closes) {
//         result = i;
//         break;
//       }
//     }

//     return result;
//   };

//   const evaluate = (start: number, end: number = s.length): number => {
//     let result = 0;
//     let op = plus;

//     const calc = (num: number) => {
//       if (op === plus) {
//         result += num;
//       } else {
//         result -= num;
//       }
//     };

//     for (let i = start; i < end; i++) {
//       const char = s[i];
//       const type = read(char);

//       switch (type) {
//         case char_type.empty:
//           break;
//         case char_type.bracket:
//           if (char === openB) {
//             let j = findClosingBracketIndex(i);
//             const localResult = evaluate(i + 1, j);
//             calc(localResult);
//             i = j;
//           }
//           break;
//         case char_type.number:
//           let num = 0;
//           while (i < end && /^\d$/.test(s[i])) {
//             num = num * 10 + Number(s[i]);
//             i++;
//           }
//           i--;
//           calc(num);
//           break;
//         case char_type.operator:
//           op = char;
//           break;
//       }
//     }

//     return result;
//   };

//   return evaluate(0);
// }

g75_72().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
