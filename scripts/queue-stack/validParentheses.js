/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s) {
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;

  const stack = [];

  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let c of s) {
    switch (c) {
      case "(":
      case "[":
      case "{":
        stack.push(pairs[c]);
        break;

      case ")":
      case "]":
      case "}":
        if (stack.pop() !== c) return false;

      default:
        break;
    }
  }

  return stack.length === 0;
};
