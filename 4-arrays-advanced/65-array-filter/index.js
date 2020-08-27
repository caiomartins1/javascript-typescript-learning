/**
 *  Filter Method
 *    -> filter method do not changes the original array
 *    -> receives a callback function thats applied to all array elements (element, index, array)
 *    -> the callback function should return true if the value should be included in the new array, else false
 *    -> will ALWAYS return an array with the SAME length or LESS
 */

// Exercise 1 -> create a new array with only the values > 10 included in the numbers array
const numbers = [1, 5, 9, 13, 15, 20, 35, 10];
const greaterThan10 = numbers.filter((el) => el > 10);
console.log(greaterThan10);

console.log('########');
// Exercise 2 -> create a new array with:
// -> people that name have more than 5 letters
// -> people that are older than 50 years old
// -> people that name ends with 'a'
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Lara', age: 51 },
  { name: 'James', age: 19 },
  { name: 'Walasse', age: 51 },
  { name: 'Lucila', age: 52 },
  { name: 'Leticia', age: 51 },
];

const filteredPeople = people.filter((person) => {
  return person.name.length > 5 && person.age > 50 && person.name.endsWith('a');
});

console.log(filteredPeople);
