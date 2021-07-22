// export abstract class TypePerson {
//   protected abstract name: string;
//   protected abstract age: number;
//   protected abstract present(): string;
// }

type TypePerson = {
  name: string;
  age: number;
  present(): string;
};

export class Person implements TypePerson {
  constructor(public name: string, public age: number) {}
  present(): string {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
  }
}
