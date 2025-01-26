const jsStack = []; // LIFO

const jsQueue = []; // FIFO

// Stack
jsStack.push(1);
jsStack.push(2);
jsStack.push(3);
console.log(jsStack.pop()); // 3
console.log(jsStack.pop()); // 2
console.log(jsStack.pop()); // 1

// Queue
jsQueue.push(1);
jsQueue.push(2);
jsQueue.push(3);
console.log(jsQueue.shift()); // 1
console.log(jsQueue.shift()); // 2
console.log(jsQueue.shift()); // 3
