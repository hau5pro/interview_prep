// https://leetcode.com/problems/accounts-merge/
// #graph #union_find

async function g75_48() {
  // script here
  const res = accountsMerge([
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time  O(N * α(N) + NlogN)
//   - N is the total number of emails
//   - α(N) is the inverse Ackermann function (nearly constant), from Union-Find operations
//   - NlogN from final sorting

// space O(N)

class UnionFind {
  constructor(private map: Map<string, string> = new Map()) {}

  // Find the root parent of a node with path compression
  find(x: string): string {
    let root = this.map.get(x) ?? x;
    if (root !== x) {
      root = this.find(root);
    }
    this.map.set(x, root); // Path compression
    return root;
  }

  // Union two sets by connecting their root parents
  union(u: string, v: string): void {
    this.map.set(this.find(u), this.find(v));
  }
}

function accountsMerge(accounts: string[][]): string[][] {
  const uf = new UnionFind();

  const emailToName: Map<string, string> = new Map();
  const emailSet = new Set<string>();

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      emailSet.add(email);
      emailToName.set(email, name);
      uf.union(emails[0], email); // Connect all emails of a particular account to the first one
    }
  }

  // Group emails by their root parent
  const emailGroups: Map<string, string[]> = new Map();
  for (const email of emailSet) {
    const primary = uf.find(email);

    if (!emailGroups.has(primary)) {
      emailGroups.set(primary, [email]);
    } else {
      emailGroups.get(primary).push(email);
    }
  }

  // generat output; sort results
  const result: string[][] = [];
  for (const [_, emails] of emailGroups) {
    emails.sort();
    result.push([emailToName.get(emails[0]), ...emails]);
  }

  return result;
}

g75_48().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
