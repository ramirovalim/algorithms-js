/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  // i => current position check
  // j => iterating to check smallest number
  for (let i = 0; i < arr.length; i++) {
    let minPos = i; // Start with the current position as the minimum
    for (let j = i + 1; j < arr.length; j++) {
      // Check only the unsorted portion
      if (arr[j] < arr[minPos]) {
        minPos = j; // Update minPos if a smaller element is found
      }
    }
    // Swap the smallest element found with the element at position `i`
    const temp = arr[minPos];
    arr[minPos] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
console.log(selectionSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
console.log(selectionSort([])); // []
console.log(selectionSort([1])); // [1]
console.log(selectionSort([3, 3, 3])); // [3, 3, 3]
