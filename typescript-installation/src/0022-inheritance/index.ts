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

export class Student extends Person {}

const s1 = new Student('s1', 's11', 18, '0000');
