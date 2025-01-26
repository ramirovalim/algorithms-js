// let x = 10;

// while (x--) {
//   console.log(10 - x);
// }

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

const sr = 1;
const sc = 1;

console.log("image1: ", image[sr][sc]);
console.log("imageL: ", image[sr][sc - 1]);
console.log("imageR: ", image[sr][sc + 1]);
