// https://leetcode.com/problems/find-median-from-data-stream/
// #array

async function g75_70() {
  // script here
  const finder = new MedianFinder();
  finder.addNum(1);
  finder.addNum(2);
  console.log(finder.findMedian());
  finder.addNum(3);
  console.log(finder.findMedian());

  console.log("done");
  process.exit(0);
}

class MedianFinder {
  nums: number[] = [];

  constructor() {}

  // keep this array sorted.
  addNum(num: number): void {
    const length = this.nums.length;
    if (length === 0 || this.nums[length - 1] <= num) {
      this.nums.push(num);
    } else {
      const index = this.nums.findIndex((n) => n > num);
      this.nums.splice(index, 0, num);
    }
  }

  findMedian(): number {
    const length = this.nums.length;
    const mid = Math.floor(length / 2);
    const isOdd = length % 2 === 1;

    if (isOdd) {
      return this.nums[mid];
    } else {
      return (this.nums[mid - 1] + this.nums[mid]) / 2;
    }
  }
}

g75_70().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
