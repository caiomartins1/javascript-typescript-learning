import { name, email as e, age, sum2 } from './module1';
// import * as module from './module1' -> module is an object that has all exported values
import DefaultExported from './module1';
console.log(name, e, age, sum2(5, 5));
const person = new DefaultExported('Caio', 4);
console.log(person.name, person.age);
