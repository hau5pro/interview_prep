// https://leetcode.com/problems/min-stack/
// #stack

async function g75_38() {
  // script here
  const stack = new MinStack();
  console.log(stack.push(-2));
  console.log(stack.push(0));
  console.log(stack.push(-1));
  console.log(stack.getMin());
  console.log(stack.pop());
  console.log(stack.top());
  console.log(stack.getMin());

  console.log("done");
  process.exit(0);
}

class MinStackNode {
  value: number;
  minimum: number;

  constructor(value: number, minimum: number) {
    this.value = value;
    this.minimum = minimum;
  }
}

class MinStack {
  stack: MinStackNode[];

  constructor() {
    this.stack = [];
  }

  // time O(1)
  push(val: number): void {
    const prev = this.peek()?.minimum ?? Infinity;
    const newMin = Math.min(prev, val);
    this.stack.push(new MinStackNode(val, newMin));
  }

  // time O(1)
  pop(): void {
    this.stack.pop();
  }

  // time O(1)
  top(): number {
    return this.peek().value;
  }

  // time O(1)
  getMin(): number {
    return this.peek().minimum;
  }

  private peek(): MinStackNode {
    return this.stack[this.stack.length - 1];
  }
}

g75_38().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
