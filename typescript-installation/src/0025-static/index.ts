export class Person {
  public static numOfPeople = 0;
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    private _cpf: string,
  ) {
    Person.numOfPeople++;
  }

  public static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, 0, '00-00');
  }
}

const p1 = new Person('p1', 'p11', 19, 'oiio');
const p2 = Person.createPerson('p2', 'p22');
