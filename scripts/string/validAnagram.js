/**
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 */
export function isAnagram(s, t) {
  if (
    typeof s !== "string" ||
    typeof t !== "string" ||
    !s.length ||
    !t.length ||
    !s ||
    !t
  ) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }

  const sCount = new Map();
  const tCount = new Map();

  for (let c of s) {
    sCount.set(c, (sCount.get(c) || 0) + 1);
  }
  for (let c of t) {
    tCount.set(c, (tCount.get(c) || 0) + 1);
  }

  return Array.from(sCount.keys()).every(
    (key) => sCount.get(key) === tCount.get(key)
  );

  // for (let key of sCount.keys()) {
  //   if (sCount.get(key) !== tCount.get(key)) return false;
  // }

  // return true;
}
