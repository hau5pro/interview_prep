// https://leetcode.com/problems/implement-trie-prefix-tree/
// #trie

async function g75_35() {
  // script here
  var trie = new Trie();
  console.log(trie.insert("apple"));
  console.log(trie.search("apple"));
  console.log(trie.search("app"));
  console.log(trie.startsWith("app"));
  console.log(trie.insert("app"));
  console.log(trie.search("app"));

  console.log("done");
  process.exit(0);
}

class TrieNode {
  children = new Map<string, TrieNode>();
  endOfWord = false;

  constructor() {}
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // time O(n)
  insert(word: string): void {
    let current = this.root;

    for (const char of word) {
      if (current.children.has(char)) {
        current = current.children.get(char);
      } else {
        const newNode = new TrieNode();
        current.children.set(char, newNode);
        current = newNode;
      }
    }

    current.endOfWord = true;
  }

  // time O(n)
  search(word: string): boolean {
    let current = this.root;

    for (const char of word) {
      if (current.children.has(char)) {
        current = current.children.get(char);
      } else {
        return false;
      }
    }

    return current.endOfWord;
  }

  // time O(n)
  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const char of prefix) {
      if (current.children.has(char)) {
        current = current.children.get(char);
      } else {
        return false;
      }
    }

    return true;
  }
}

g75_35().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
