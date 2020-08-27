// array.splice(startingIndex, howManyDelete, ...addItems)
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// pop
const lastItem = numbers.splice(-1, 1);
console.log(numbers, lastItem);
console.log('########################');
// remove more items
const firstTwo = numbers.splice(0, 2);
console.log(numbers, firstTwo);
console.log('########################');
// add element to specific position
numbers.splice(1, 0, 35);
console.log(numbers);
console.log('########################');
// substitute an element for other
numbers.splice(2, 1, 45);
console.log(numbers);
