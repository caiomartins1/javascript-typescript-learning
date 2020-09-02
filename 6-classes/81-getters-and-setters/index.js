/**
 * To create private atributes, we define a symbol
 */

const _speed = Symbol('speed');

class Car {
  constructor(model) {
    this.model = model;
    this[_speed] = 0;
  }

  set speed(value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;

    this[_speed] = value;
  }

  get speed() {
    return this[_speed];
  }

  speedUp() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  speedDown() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const c1 = new Car('ferrari');

for (let i = 0; i <= 200; i++) {
  c1.speedUp();
}

for (let i = 0; i <= 200; i++) {
  c1.speedDown();
}

c1.speed = 19;
console.log(c1);
console.log('###############');
class Person {
  constructor(name, secondName) {
    this.name = name;
    this.secondName = secondName;
  }

  get fullName() {
    console.log('Getter!');
    return this.name + ' ' + this.secondName;
  }

  set fullName(name) {
    console.log('Setter!');
    name = name.split(' ');
    this.name = name.shift();
    this.secondName = name.join(' ');
  }
}

const p1 = new Person('caio', 'diniz');
console.log(p1.fullName);
p1.fullName = 'Caio Cesar Diniz Martins';
console.log(p1.fullName);
