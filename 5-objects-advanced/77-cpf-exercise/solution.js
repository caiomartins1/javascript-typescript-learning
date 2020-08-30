function ValidateCPF(cpf) {
  Object.defineProperty(this, 'cpf', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '');
    },
  });
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cpf === 'undefined') return false;
  if (this.cpf.length !== 11) return false;
  if (this.isSequence()) return false;

  const parcialCPF = this.cpf.slice(0, -2);
  const digit1 = this.createDigit(parcialCPF);
  const digit2 = this.createDigit(parcialCPF + digit1);

  const newCPF = parcialCPF + digit1 + digit2;

  return newCPF === this.cpf;
};

ValidateCPF.prototype.createDigit = function (parcialCPF) {
  const cpfArray = Array.from(parcialCPF);
  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((acc, el) => {
    acc += regressive * Number(el);
    regressive--;
    return acc;
  }, 0);

  const digit = 11 - (total % 11);

  return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.isSequence = function () {
  return this.cpf[0].repeat(this.cpf.length) === this.cpf;
};

const cpf = new ValidateCPF('705.484.450-52');
console.log(cpf.validate());
