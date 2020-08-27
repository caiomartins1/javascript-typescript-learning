const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, ...rest] = numbers;

console.log(first, second);
console.log(rest);

// we can also jump some values
const [first1, , third1, , fourth1] = numbers;
console.log(first1, third1, fourth1);

// we can also user destructuring in 2d arrays (too complex, try to avoid)
const numbers2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// get de 5
const [, [, five]] = numbers2D;
console.log(five);
