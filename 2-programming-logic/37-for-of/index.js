// for of -> specific for iterable structures
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const person = {
  name: 'Caio',
  secondName: 'Cesar',
  age: 20,
  address: {
    country: 'Brazil',
    city: 'Sao Paulo',
  },
};
const string = 'A really big string';

for (let number of numbers) {
  console.log(number);
}

for (let letter of string) {
  console.log(letter);
}

numbers.forEach(function (el, index, array) {
  console.log(el, index);
});
