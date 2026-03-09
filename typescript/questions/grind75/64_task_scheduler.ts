// https://leetcode.com/problems/task-scheduler/
// #max_heap

async function g75_64() {
  // script here
  const res = leastInterval(["A", "A", "A", "B", "B", "B"], 2);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(n)

function leastInterval(tasks: string[], n: number): number {
  let result = tasks.length;

  const map: Map<string, number> = new Map();

  // count all occurences of each unique task
  for (const task of tasks) {
    if (map.has(task)) {
      map.set(task, map.get(task) + 1);
    } else {
      map.set(task, 1);
    }
  }

  const frequencies = [];

  for (const element of map.values()) {
    frequencies.push(element);
  }

  frequencies.sort((a, b) => b - a);

  let need = n;

  while (frequencies[0] > 0) {
    frequencies[0]--;

    for (let i = 1; i < frequencies.length; i++) {
      if (frequencies[i] > 0) {
        frequencies[i]--;
        need -= 1;
      } else {
        break;
      }

      if (need <= 0) {
        frequencies.sort((a, b) => b - a);
        break;
      }
    }

    if (need > 0 && frequencies[0] !== 0) {
      result += need;
    }

    need = n;
  }

  return result;
}

// bucketize tasks and batch remove with idles needed
// doesnt work in all cases
// function leastInterval(tasks: string[], n: number): number {
//   let result = 0;

//   if (tasks.length === 0) return result;

//   const map: Map<string, number> = new Map();

//   // bucketize counts
//   for (const task of tasks) {
//     if (map.has(task)) {
//       map.set(task, map.get(task) + 1);
//     } else {
//       map.set(task, 1);
//     }
//   }

//   while (map.size > 0) {
//     const idlesNeeded = map.size > n ? 0 : n + 1 - map.size;

//     map.forEach((count, task, m) => {
//       if (count === 1) {
//         m.delete(task);
//       } else {
//         m.set(task, count - 1);
//       }

//       result++;
//     });

//     if (map.size > 0) {
//       result += idlesNeeded;
//     }
//   }

//   return result;
// }

g75_64().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
