// consts follow the same rules of lets, but you cant change their value
// Can't only declare a const. ALWAYS need to declare and assign the const value

const name = 'Caio';
console.log(name);

// name = 'Martins';     this line will cause an error because i'm trying to re-assign a const value
// console.log(name);

const firstName = 'Caio';
const secondName = 'Martins';
const fullName = firstName + ' ' + secondName; // valid because we are not changing a const value
console.log(fullName);
