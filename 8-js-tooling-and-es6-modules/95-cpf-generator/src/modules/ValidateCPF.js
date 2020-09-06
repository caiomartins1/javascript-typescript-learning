export default class ValidateCPF {
  constructor(cpf) {
    this.cpf = cpf.replace(/\D+/g, '');
  }

  validate() {
    if (typeof this.cpf === 'undefined') return false;
    if (this.cpf.length !== 11) return false;
    if (this.isSequence()) return false;

    const parcialCPF = this.cpf.slice(0, -2);
    const digit1 = ValidateCPF.createDigit(parcialCPF);
    const digit2 = ValidateCPF.createDigit(parcialCPF + digit1);

    const newCPF = parcialCPF + digit1 + digit2;

    return newCPF === this.cpf;
  }

  static createDigit(parcialCPF) {
    const cpfArray = Array.from(parcialCPF);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((acc, el) => {
      acc += regressive * Number(el);
      regressive--;
      return acc;
    }, 0);

    const digit = 11 - (total % 11);

    return digit > 9 ? '0' : String(digit);
  }

  isSequence() {
    return this.cpf[0].repeat(this.cpf.length) === this.cpf;
  }
}
