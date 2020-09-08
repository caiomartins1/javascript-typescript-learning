const Dog = require('./f4/f5/mod2');
const path = require('path');

const dog = new Dog('Nick');
console.log(dog.eat());

// console.log(__dirname);
// console.log(__filename);

console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..'));
