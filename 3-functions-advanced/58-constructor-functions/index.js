/**
 *  Constructor Functions:
 *    -> needs to use the new keyword when calling them
 *    -> returns an object,
 *    -> starts with capital letter by convention
 */

function Person(name, secondName) {
  // to use private props, we use the let or const key words
  const id = 3;
  const privateMethod = () => {
    console.log(this.name);
  };

  this.name = name;
  this.secondName = secondName;

  this.method = function () {
    console.log(id + ': seila');
    privateMethod();
  };
}

const caio = new Person('Caio', 'Martins');
console.log(caio.name);
caio.method();
