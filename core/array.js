import * as _ from "lodash";

Emmiter.on("event", () => {
  console.log("event");
});

_.debounce(() => {
  console.log("debounce");
}, 1000);

const reduceSum = [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0);
console.log(reduceSum);
