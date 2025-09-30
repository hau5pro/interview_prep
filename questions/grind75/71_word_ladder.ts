// https://leetcode.com/problems/word-ladder/
// #bfs

async function g75_71() {
  // script here
  const res = ladderLength("hit", "cog", [
    "hot",
    "dot",
    "dog",
    "lot",
    "log",
    "cog",
  ]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// L = length of word
// time O(N * L^2)
// space O(N * L)

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  // adjacency list
  const wc = "*"; //wildcard
  const wordLength = beginWord.length;

  wordList.push(beginWord);
  const neighbours = new Map<string, string[]>();

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + wc + word.slice(i + 1);

      if (!neighbours.has(pattern)) {
        neighbours.set(pattern, []);
      }
      neighbours.get(pattern).push(word);
    }
  }

  const visited = new Set([beginWord]);
  const queue = [beginWord];
  let result = 1;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift();
      if (word === endWord) {
        return result;
      }

      for (let j = 0; j < word.length; j++) {
        const pattern = word.slice(0, j) + wc + word.slice(j + 1);
        const adjacentWords = neighbours.get(pattern) || [];
        for (const next of adjacentWords) {
          if (!visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        }
      }
    }
    result++;
  }

  return 0;
}

g75_71().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
