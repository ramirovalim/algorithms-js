/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = function (ransomNote, magazine) {
  const magazineLetters = new Map();

  for (let char of magazine) {
    if (magazineLetters.has(char)) {
      magazineLetters.set(char, magazineLetters.get(char) + 1);
    } else {
      magazineLetters.set(char, 1);
    }
  }

  for (let char of ransomNote) {
    const magLetter = magazineLetters.get(char);
    if (!magLetter) {
      return false;
    } else {
      magazineLetters.set(char, magLetter - 1);
    }
  }

  return true;
};
