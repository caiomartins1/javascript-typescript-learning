export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    public readonly sNumber: number,
    name: string,
    lastName: string,
    age: number,
    cpf: string,
  ) {
    super(name, lastName, age, cpf);
  }

  public getFullName(): string {
    console.log(super.getFullName());
    return 'A' + this.name;
  }
}

const s1 = new Student(41375, 's1', 's11', 18, '0000');
