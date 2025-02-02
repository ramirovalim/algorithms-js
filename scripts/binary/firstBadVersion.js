/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
export const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let L = 1;
    let R = n;

    while (L < R) {
      let mid = L + Math.floor((R - L) / 2); // prevent overflow, as L + R can be too large
      if (isBadVersion(mid)) {
        if (isBadVersion(mid - 1)) return mid;
        R = mid;
      } else {
        L = mid + 1;
      }
    }

    return L;
  };
};
