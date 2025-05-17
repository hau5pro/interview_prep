// https://leetcode.com/problems/valid-anagram/
// #string #hash_map

async function g75_07() {
  // script here
  // const res = isAnagram("anagram", "nagaram");
  const res = isAnagram("rat", "car");
  console.log(res);

  console.log("done");
  process.exit(0);
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (map[char]) {
      const diff = map[char] - 1;
      if (diff === 0) {
        delete map[char];
      } else {
        map[char] = map[char] - 1;
      }
    } else {
      break;
    }
  }

  const isAnagram = Object.keys(map).length === 0;

  return isAnagram;
}

g75_07().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
