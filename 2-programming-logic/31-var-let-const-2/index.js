// IMPORTANT -> var variables and functions defined with function keyword are hoisted (hoisting)
// hoisting will declare all variables in the beginning of script and set then to undefined

let name = 'Caio';
var name2 = 'James';

// 1st difference between let and var
// let name = 'Rodrigo' -> error
// var name2 = 'Rodrigo' -> allowed

// 2nd difference between let and var
// let has block scope and var only has function scope
if (true) {
  let name = 'Not Caio';
  var name2 = 'Not James';
  console.log(name, name2);
}

console.log(name, name2);

// var function scope example

function example() {
  var name5 = 'caio';
  console.log('hey');
}

// console.log(name5); -> error name5 is not defined
