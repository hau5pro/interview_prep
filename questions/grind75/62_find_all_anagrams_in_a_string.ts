// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// #string #sliding_window

async function g75_62() {
  // script here
  // const res = findAnagrams("cbaebabacd", "abc");
  const res = findAnagrams("abab", "ab");
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n)
// space O(k + m)
// k is bounded by 26 (letters)
// m is number of anagram matches in s

function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  const need = new Map<string, number>();
  const window = new Map<string, number>();

  for (const char of p) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (right - left >= p.length) {
      if (valid === need.size) {
        result.push(left);
      }

      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d)! - 1);
      }
    }
  }

  return result;
}

// O(m x n) brutish force
// function findAnagrams(s: string, p: string): number[] {
//   const result: number[] = [];

//   // count all chars needed
//   const charSet = new Map<string, number>();
//   for (const char of p) {
//     if (charSet.has(char)) {
//       charSet.set(char, (charSet.get(char) || 0) + 1);
//     } else {
//       charSet.set(char, 1);
//     }
//   }

//   const validate = (subString: string, map: Map<string, number>): boolean => {
//     for (let i = 0; i < subString.length; i++) {
//       const char = subString[i];
//       if (map.has(char) && map.get(char) > 0) {
//         if (map.get(char) === 1) {
//           map.delete(char);
//         } else {
//           map.set(char, map.get(char)! - 1);
//         }
//       } else {
//         return false;
//       }
//     }

//     return map.size === 0;
//   };

//   for (let i = 0; i < s.length - p.length + 1; i++) {
//     const subString = s.substring(i, i + p.length);
//     const set = new Map(charSet);
//     if (validate(subString, set)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

g75_62().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
