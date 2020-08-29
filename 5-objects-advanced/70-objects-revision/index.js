/**
 * object { key: value }
 */

// const person = new Object();
const person = {
  name: 'Caio',
  age: 21,
  greeting: function () {
    return `Hey! ${this.name}`;
  },
};

// two ways to access a value
console.log(person.name);
console.log(person['name']);

// delete a key/value
console.log('#######');
delete person.age;
console.log(person);

// method call
console.log('#######');
console.log(person.greeting());

// looping through objects
console.log('#######');
for (let key in person) {
  console.log(key, person[key]);
}

// Factory / Constructor / Classes
function createPerson(firstName, secondName) {
  return {
    firstName,
    secondName,
    get fullName() {
      return `${firstName} ${secondName}`;
    },
  };
}

const p1 = createPerson('Caio', 'Martins');
console.log(p1.fullName);

function Person(name, secondName) {
  this.name = name;
  this.secondName = secondName;

  // Object.freeze(this); -> make the object immutable
}
// new keyword creates a empty object and bind the this keyword to it AND returns this
const p2 = new Person('Caio2', 'Martins2');
console.log(p2);
