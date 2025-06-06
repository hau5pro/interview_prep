// https://leetcode.com/problems/time-based-key-value-store/
// #binary_search

async function g75_47() {
  // script here
  const map = new TimeMap();
  console.log(map.set("foo", "bar", 1));
  console.log(map.get("foo", 1));
  console.log(map.get("foo", 3));
  console.log(map.set("foo", "bar2", 4));
  console.log(map.get("foo", 4));
  console.log(map.get("foo", 5));

  console.log("done");
  process.exit(0);
}

class TimeMap {
  map: Map<string, [number, string][]>;

  constructor() {
    this.map = new Map();
  }

  // time O(1)
  set(key: string, value: string, timestamp: number): void {
    if (this.map.has(key)) {
      this.map.get(key).push([timestamp, value]);
    } else {
      this.map.set(key, [[timestamp, value]]);
    }
  }

  // time O(log(n))
  get(key: string, timestamp: number): string {
    let val: string = "";

    if (this.map.has(key)) {
      const arr = this.map.get(key);
      let left = 0;
      let right = arr.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid][0] == timestamp) {
          val = arr[mid][1];
          break;
        } else if (arr[mid][0] < timestamp) {
          val = arr[mid][1];
          left = mid + 1;
        } else if (arr[mid][0] > timestamp) {
          right = mid - 1;
        }
      }
    }

    return val;
  }
}

g75_47().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
