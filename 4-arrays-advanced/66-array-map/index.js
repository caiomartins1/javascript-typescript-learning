/**
 * Array Map:
 *  -> always the size of original array
 *
 */

const numbers = [1, 5, 9, 13, 15, 20, 35, 10];
const x2 = numbers.map((el) => el * 2);

console.log(x2, numbers);

const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Lara', age: 51 },
  { name: 'James', age: 19 },
  { name: 'Walasse', age: 51 },
  { name: 'Lucila', age: 52 },
  { name: 'Leticia', age: 51 },
];

const namesArray = people.map((el) => el.name);
const ageObjArray = people.map((el) => ({ age: el.age }));
const peopleWithID = people.map((el, i) => ({ ...el, id: i }));

console.log(namesArray);
console.log(ageObjArray);
console.log(peopleWithID);

console.log('############');

// el are references to the objects, so if we change inside map, we will be changing in the original place too

const problemWithReference = people.map((el, index) => {
  el.id = index;
  return el;
});

console.log(problemWithReference, people);
