// https://leetcode.com/problems/lru-cache/
// #map

async function g75_65() {
  // script here
  const cache = new LRUCache(2);
  console.log(cache.put(1, 1));
  console.log(cache.put(2, 2));
  console.log(cache.get(1));
  console.log(cache.put(3, 3));
  console.log(cache.get(2));
  console.log(cache.put(4, 4));
  console.log(cache.get(1));
  console.log(cache.get(3));
  console.log(cache.get(4));

  console.log("done");
  process.exit(0);
}

// Note: can make this with a doubly linked list
// time O(1)
// space O(n)

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
  private capacity: number;
  private map: Map<number, number> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value === undefined) {
      return -1;
    }

    this.reorder(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.map.size >= this.capacity && !this.map.has(key)) {
      const lru = this.map.keys().next().value;
      this.map.delete(lru);
    }

    this.reorder(key, value);
  }

  // update key order by removing and adding
  private reorder(key: number, value: number): void {
    this.map.delete(key);
    this.map.set(key, value);
  }
}

g75_65().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
