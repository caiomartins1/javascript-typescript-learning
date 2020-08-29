/**
 * Javascript is based on prototypes to pass properties and methods from one object to other
 *
 *  Prototype:
 *    Prototype is the term given to what was created for the first time,
 *    will be used as model to future productions
 *
 *  All javascript objects have a intern reference to a prototype (__proto__)
 *  that comes from the constructor function's prototype property that was used to create the object.
 *  When we try to access a property or method from an object, first the engine will try to find that
 *  property in that object, if not found, the engine will search through the prototype chain until find it.
 */

// Constructor
function Person(name, secondName, age) {
  this.name = name;
  this.secondName = secondName;
  this.age = age;
}

Person.prototype.propToAllObjects = 'hahahahhahaha'; // we can use p1.propToAllObjects

// instances
const p1 = new Person('Person1', 'Ex', 40);
const p2 = new Person('Person2', 'Ex', 50);
const date = new Date();

console.log(Person.prototype === p1.__proto__);

console.dir(date); // note that date do not have any property or method inside it, all methods are inside its proto
console.dir(p1);
console.dir(p2);
