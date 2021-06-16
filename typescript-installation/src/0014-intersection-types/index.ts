type HasName = { name: string };
type HasSecondName = { secondName: string };
type HasAge = { age: number };

type Person = HasName & HasSecondName & HasAge;

const person: Person = {
  name: 'Caio',
  secondName: 'Doe',
  age: 19,
};

export { person };
