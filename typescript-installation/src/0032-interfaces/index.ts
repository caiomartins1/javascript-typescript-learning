interface IName {
  name: string;
}

interface ILastName {
  lastName: string;
}

interface IFullName extends IName, ILastName {
  fullname(): string;
}

class Person implements IFullName {
  fullname(): string {
    throw new Error('Method not implemented.');
  }
  name: string;
  lastName: string;
}
