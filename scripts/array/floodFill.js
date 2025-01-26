/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
export const floodFill = function (image, sr, sc, color) {
  if (image.length < 1 || image[sr][sc] === color) {
    return image;
  }

  const originalColor = image[sr][sc];

  const fill = (curRow, curCol) => {
    if (
      curRow < 0 ||
      curRow >= image.length ||
      curCol < 0 ||
      curCol >= image[0].length
    )
      return;

    if (image[curRow][curCol] !== originalColor) return;

    image[curRow][curCol] = color;

    // Left pixel
    fill(curRow, curCol - 1);

    // Top pixel
    fill(curRow - 1, curCol);

    // Right pixel
    fill(curRow, curCol + 1);

    // Bottom pixel
    fill(curRow + 1, curCol);
  };

  fill(sr, sc);

  return image;
};
