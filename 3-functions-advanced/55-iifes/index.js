// IIFE -> Immediatly Invoked Function Expression
(function (age, weight, height) {
  const name = 'Caio';

  function createName(secondName) {
    return name + ' ' + secondName;
  }

  console.log(createName('Martins'));
  console.log(age);
})(20, 70, 1.7);
// IFFES will protect ur code from the global scope
const name = 'James';

console.log(name);
