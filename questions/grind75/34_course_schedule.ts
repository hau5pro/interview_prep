// https://leetcode.com/problems/course-schedule/
// #adjacency_list #dfs

async function g75_34() {
  // script here
  const res = canFinish(2, [
    [1, 0],
    [0, 1],
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n + p)
// space O(n + p)

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (prerequisites.length === 0) {
    return true;
  }

  let map = new Map<number, number[]>();

  // map all courses
  for (let i = 0; i < prerequisites.length; i++) {
    let prereq = prerequisites[i];

    if (map.has(prereq[0])) {
      map.get(prereq[0]).push(prereq[1]);
    } else {
      map.set(prereq[0], [prereq[1]]);
    }
  }

  // dfs all courses
  let visited = new Set<number>();
  const dfs = (course: number) => {
    // already visited, infinite loop
    if (visited.has(course)) {
      return false;
    }

    const prereqs = map.get(course) ?? [];
    // no prereqs
    if (prereqs?.length === 0) {
      return true;
    }

    visited.add(course);
    // recurse all prereqs
    for (const prereq of prereqs) {
      if (!dfs(prereq)) {
        return false;
      }
    }

    // remove prereq after visiting
    visited.delete(course);
    map.set(course, []);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
}

g75_34().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
