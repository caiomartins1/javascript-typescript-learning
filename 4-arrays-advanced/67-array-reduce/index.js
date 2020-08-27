/**
 * Array Reduce
 *  -> (acc, el, index, array)
 */

const numbers = [1, 5, 9, 13, 15, 20, 35, 10];

const sum = numbers.reduce((acc, el) => {
  return acc + el;
}, 0); // 0 is the starting value of acc

const evens = numbers.reduce((acc, el) => {
  if (el % 2 === 0) acc.push(el);
  return acc;
}, []);

const x2 = numbers.reduce((acc, el) => {
  acc.push(el * 2);
  return acc;
}, []);

console.log(sum);
console.log(evens);
console.log(x2);

// Exercise -> return the older person
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Lara', age: 51 },
  { name: 'James', age: 19 },
  { name: 'Walasse', age: 51 },
  { name: 'Lucila', age: 72 },
  { name: 'Leticia', age: 51 },
];

const older = people.reduce((acc, el) => {
  if (el.age > acc.age) {
    acc = el;
  }
  return acc;
});

console.log(older);
