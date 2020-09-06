export default class Generator {
  rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  getNumber() {
    return String.fromCharCode(this.rand(48, 58));
  }
  getUpperCase() {
    return String.fromCharCode(this.rand(65, 91));
  }
  getLowerCase() {
    return String.fromCharCode(this.rand(97, 123));
  }
  getSymbol() {
    const symbols = '!@#$%^&*()_+=-,./<>?';
    return symbols[this.rand(0, symbols.length)];
  }
}
