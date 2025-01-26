/**
 * @param {string} s
 * @return {boolean}
 */

export const isPalindrome = function (s) {
  const formattedString = s.toLowerCase().replace(/[^a-zA-Z\d]/g, "");
  if (!formattedString.length) {
    return true;
  }

  let p1 = 0;
  let p2 = formattedString.length - 1;

  while (p1 < p2) {
    if (formattedString[p1] !== formattedString[p2]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
};
