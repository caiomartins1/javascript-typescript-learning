import Generator from './Generator';

export default class PasswordGenerator {
  constructor() {
    this.generator = new Generator();
    this.passwordLength = Number(document.querySelector('#length').value);
    this.addNumbers = document.querySelector('#numbers').checked;
    this.addUpperCase = document.querySelector('#upperCases').checked;
    this.addLowerCase = document.querySelector('#lowerCases').checked;
    this.addSymbols = document.querySelector('#symbols').checked;
  }
  genPassword() {
    let password = [];

    for (let i = 0; i < this.passwordLength; i++) {
      this.addUpperCase && password.push(this.generator.getUpperCase());
      this.addLowerCase && password.push(this.generator.getLowerCase());
      this.addNumbers && password.push(this.generator.getNumber());
      this.addSymbols && password.push(this.generator.getSymbol());
    }
    return (
      password.join('').slice(0, this.passwordLength) || 'Nothing Selected'
    );
  }
}
