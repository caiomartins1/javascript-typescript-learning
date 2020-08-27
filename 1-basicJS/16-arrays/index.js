//                 0       1       2            -> arrays are indexed starting from 0
const students = ['Caio', 'João', 'Maria'];

// In javascript arrays are objects
// To make sure we are working with an array we can use:
console.log(students instanceof Array);

// NOTE: We can access indexes that dont exist and their values will be undefined
const indexOutOfBounds = students[800];
console.log('indexOutOfBounds', indexOutOfBounds);

// check array length
console.log('Array length: ', students.length);

// acess all students
console.log('students', students);

// access only the first student
console.log('first student', students[0]);

// edit the value of the first student
students[0] = 'James';
console.log('new first student', students[0]);

// add new element to the end of an array
students[3] = 'Thiago'; // -> bad practice, because this way we need to know the exact array's length
students[students.length] = 'Marcos'; // another way to add an element but still not practical
students.push('Caio'); // BEST WAY to add to the end of an array O(1)!!!!!!!
console.log('students', students);

// add new element to the beginning of an array
// NOTE: unshift time complexity is O(n)
students.unshift('First Student'); // adds to the index 0 and moves all existing items to the right (+1 index pos)
console.log('students', students);

// remove the last array element
const removed = students.pop(); // removes and returns the last array element
console.log('removed', removed);
console.log('students', students);

// remove the first array element
const removed2 = students.shift(); // removes, returns the first array element and moves all existing items to the left (-1 index pos)
console.log('removed2', removed2);
console.log('students', students);

// remove an element from array without shifting
delete students[2]; // change the value of students[2] to undefined
console.log('students', students);

// slice an array
const slicedStudents = students.slice(0, 2); // first 2 elements -> index 0 and index 1
console.log('slicedStudents', slicedStudents);
