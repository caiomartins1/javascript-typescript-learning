export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const p1 = new Person('p1', 'p11', 19, 'oiio');
p1.cpf = '00-00-00';
console.log(p1.cpf);
