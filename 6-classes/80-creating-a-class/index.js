/**
 * In javascript, classes are only syntax sugar to what we've been doing with prototypes
 * with classes, we dont need to create a prototype and add methods to it
 */

class Person {
  constructor(name, secondName) {
    this.name = name;
    this.secondName = secondName;
  }

  greeting() {
    console.log(`${this.name} is greeting you!`);
  }
}

// equivalent with constructor
function Person2(name, secondName) {
  this.name = name;
  this.secondName = secondName;
}
Person2.prototype.greeting = function () {
  console.log(`${this.name} is greeting you!`);
};

const p1 = new Person('Caio', 'Martins');
const p2 = new Person2('Caio2', 'Martins2');
console.log(p1); // note that the methods are already in the proto
console.log(p2);
p1.greeting();
p2.greeting();
