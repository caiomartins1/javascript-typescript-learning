const name = 'Caio';
export const email = 'caio@dev.com';
const age = 22;

function sum(x, y) {
  return x + y;
}

export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export { name, age, sum as sum2 };
