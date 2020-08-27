/**
 * Factory Functions: functions that return an object
 */

function createPerson(name, secondName, height, weight) {
  return {
    name,
    secondName,
    age: 30,
    height,
    weight,

    // Getter
    get fullName() {
      return `${this.name} ${this.secondName}`;
    },

    // Setter
    set fullName(fullName) {
      const splitedName = fullName.split(' ');
      this.name = splitedName.shift();
      this.secondName = splitedName.join(' ');
    },

    greeting: function (greeting) {
      return `${greeting}, my name is ${name} ${secondName} and I'm ${this.age}`;
    },

    get imc() {
      return (this.height / this.weight ** 2).toFixed(2);
    }, // get keyword will turn imc function into a propery
  };
}
// this refers to who called the object
const caio = createPerson('Caio', 'Martins', 70, 1.7);
console.log(caio.greeting('Hi!'));
console.log(caio.imc);
caio.fullName = 'James Ras Res';
console.log(caio.fullName);
