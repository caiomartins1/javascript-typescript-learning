/**
 *
 */

// new Object -> Object.prototype ----> Object.prototype do not have __proto__
const objA = {
  a: 'A',
  //__proto__: Object.prototype
};

const objB = {
  b: 'B',
};

const objC = new Object();
objC.c = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log('objB.a ->', objB.a);
console.log('objA ->', objA);
console.log('objB ->', objB);
console.log('objC ->', objC);

// NOTE: DO NOT use __proto__ because it can have negative consequences to the program

// In practice
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (percentage) {
  this.price -= this.price * (percentage / 100);
};

Product.prototype.increase = function (percentage) {
  this.price += this.price * (percentage / 100);
};

const p1 = new Product('bike', 50);
// p1.discount(100);
p1.increase(100);
console.log('p1 ->', p1);

// use an existing prototype:
const p2 = {
  name: 'skate',
  price: 40,
};

Object.setPrototypeOf(p2, Product.prototype);

p2.increase(100);
console.log(p2.price);

// creating and setting the prototype
const p3 = Object.create(Product.prototype);
