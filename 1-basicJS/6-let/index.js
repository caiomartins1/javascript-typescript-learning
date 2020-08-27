let name = 'Caio'; // declared and assigned a value to the variable
let secondName; // declared a variable -> initialized with undefined

console.log(secondName);
secondName = 'Martins'; // assign 'Martins' to secondName variable: undefined -> 'Martins'
console.log(secondName);
console.log(name, 'was born in 1999');
console.log(name, 'lives in Portugal');
console.log('in 2021', name, 'will finish his degree in computer science');

// Can't create variables with JS reserved words
// Variables names can't start with a number
// Variables names can't contain a space or a dash ('-')
// Variables should have descriptive names
// Variables names should be camelCase
// Variables are CASE SENSITIVE
// NEVER user var
