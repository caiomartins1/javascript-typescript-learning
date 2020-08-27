/**
 * Functions can return values
 * by default, if we dont return anything a function will return undefined
 */

// returns a number
function sum(a, b) {
  return a + b;
}

// returns undefined
function sum2(a, b) {
  console.log(a + b);
}

// return an object
function createPerson(name, age) {
  return { name, age };
}
const caio = createPerson('Caio', 20);

// return functions
function f1(name) {
  function f2(secondName) {
    return name + ' ' + secondName;
  }

  return f2;
}
const fullNameFunc = f1('Caio');
console.log(fullNameFunc('Martins'));
