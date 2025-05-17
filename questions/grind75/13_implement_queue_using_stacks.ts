// https://leetcode.com/problems/implement-queue-using-stacks/
// #queue #stack

async function g75_13() {
  // script here
  const queue = new MyQueue();
  console.log(`1. push ${queue.push(1)}`);
  console.log(`2. push ${queue.push(2)}`);
  console.log(`3. peek ${queue.peek()}`);
  console.log(`4. pop ${queue.pop()}`);
  console.log(`5. empty ${queue.empty()}`);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

class MyQueue {
  private input: number[] = [];
  private output: number[] = [];

  constructor() {}

  push(x: number): void {
    while (this.output.length !== 0) {
      const val = this.output.pop();
      this.input.push(val);
    }

    this.input.push(x);

    while (this.input.length !== 0) {
      const val = this.input.pop();
      this.output.push(val);
    }
  }

  pop(): number {
    return this.output.pop();
  }

  peek(): number {
    const val = this.output.pop();
    this.output.push(val);
    return val;
  }

  empty(): boolean {
    return this.output.length === 0;
  }
}

g75_13().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
