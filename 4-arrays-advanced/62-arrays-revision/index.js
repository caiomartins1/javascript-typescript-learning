const names = ['Caio', 'James', 'Eduardo'];
// const names = new Array('Caio', 'James', 'Eduardo'); // works the same way as above
// remember to use rest operator to copy arrays because they are referenced types
names[2] = 'Joao';
console.log(names);
delete names[2];
console.log(names);
console.log(names.length); // In JS length is a property of an array object
// we can use .pop() to remove the last element and .shift() to remove the first element
// we can use .push() to add an element to the end and .unshift() to add an element to the first position
const sliceOfNames = names.slice(0, 2);
console.log(sliceOfNames);

const string = 'A really big string that u cant imagine how bit it is';
const splittedString = string.split(' ');
console.log(splittedString);
const joinedString = splittedString.join(' ');
console.log(joinedString);
