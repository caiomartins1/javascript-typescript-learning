// We can use the char '\' to mean the LITERAL value of something in a string, ex:
// Strings are indexed starting from 0
const myName = 'Caio';
console.log(myName[0]); // 'C'
console.log(myName[4]); // undefined

// strings have some built in methods
console.log(myName.charAt(0)); // 'C'
console.log(myName.charAt(9)); // do not returns undefined
console.log(myName.charCodeAt(1)); // Returns the 'C' char ASCII Code

console.log(myName.concat(' Martins'));
console.log(myName.indexOf('Caio')); // searchs for the given input and returns the starting index, or -1 if not found

// methods that accept regex
console.log(myName.search(/a/));
console.log(myName.match(/Caio/));
console.log(myName.replace(/Caio/, 'João'));

// length property
console.log(myName.length);

console.log(myName.slice(0, 3)); // returns the characters starting from 0 and ending on 3 BUT NO INCLUDING!

const sentence = 'one day in a sunday morning we went to france';

console.log(sentence.split(' ')); // breaks the string every time that finds a ' '
console.log(sentence.split(' ', 3)); // breaks the string every time that finds a ' ' only the 3 first occurr

// case methods
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
