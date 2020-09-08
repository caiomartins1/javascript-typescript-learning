const multiplication = require('../../f1/f2/f3/mod1');

module.exports = class Dog {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} ate ${multiplication(3, 3)} times!`);
  }
};
