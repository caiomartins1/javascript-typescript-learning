/**
 * For node default modules or modules intalled with NPM we wont use the relative path.
 */

const path = require('path'); // default node module
const axios = require('axios'); // module installed with NPM
const mod1 = require('./mod1'); // imports all

// const greet = require('./mod1').greet; // imports only greet()

const { name, age, greet } = require('./mod1'); // importing using destructuring
const { Person } = require('./Person');

console.log(mod1);
console.log(mod1.greet());
console.log(greet());

const p1 = new Person('Caio');
console.log(p1);

axios('https://swapi.dev/api/people')
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
