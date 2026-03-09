// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// #array #stack

async function g75_33() {
  // script here
  const res = evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function evalRPN(tokens: string[]): number {
  const operators = ["/", "*", "+", "-"];
  const isOperator = (op: string) => operators.includes(op);

  const evaluate = (a: number, b: number, operator: string): number => {
    let res: number;

    switch (operator) {
      case "/":
        res = Math.trunc(a / b);
        break;
      case "*":
        res = a * b;
        break;
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      default:
        console.warn(`! ${operator}`);
    }

    return res;
  };

  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (isOperator(token)) {
      const b = stack.pop();
      const a = stack.pop();
      const res = evaluate(a, b, token);
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
}

// function evalRPN(tokens: string[]): number {
//   type op = "/" | "*" | "+" | "-";
//   const operators = ["/", "*", "+", "-"]; // BEDMAS order
//   const isOperator = (op: string) => operators.includes(op);

//   class Expression {
//     numbers: number[] = [];
//     operator: op;
//   }

//   const expressions: Expression[] = [];
//   let exp = new Expression();

//   for (let i = 0; i < tokens.length; i++) {
//     // track expressions
//     const token = tokens[i];

//     if (isOperator(token)) {
//       exp.operator = token as op;
//       expressions.push(exp);
//       exp = new Expression();
//     } else {
//       exp.numbers.push(Number(token));
//     }
//   }

//   // eval expressions

//   return 0;
// }

g75_33().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
