const name = 'Caio';
const age = 23;

const greet = () => `Hi, I'm ${name} and I'm ${age} years old`;

// The module object has a key called exports. This exports object contains everything that is exported from this file.
console.log(module);

// There are several different ways to export

// module.exports.name = name;
// module.exports.age = age;
// module.exports.greet = greet;

// exports.name = name;
// exports.age = age;
// exports.greet = greet;

this.name = name;
this.age = age;
this.greet = greet;

console.log(module.exports);
