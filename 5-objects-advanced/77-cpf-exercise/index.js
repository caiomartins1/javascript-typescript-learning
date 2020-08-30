function computeCPF(cpf) {
  return cpf.replace(/\D+/g, '');
}

function generateFirstDigit(cpfArray) {
  let sumArr = [];

  let j = 0;
  for (let i = 10; i > 1; i--) {
    sumArr.push(i * cpfArray[j]);
    j++;
  }

  sumArr = sumArr.reduce((acc, el) => {
    return acc + el;
  }, 0);

  const firstDigit = 11 - (sumArr % 11);

  return firstDigit > 9 ? 0 : firstDigit;
}

function generateSecondDigit(cpfArray) {
  let sumArr = [];

  let j = 0;
  for (let i = 11; i > 1; i--) {
    sumArr.push(i * cpfArray[j]);
    j++;
  }

  sumArr = sumArr.reduce((acc, el) => {
    return acc + el;
  }, 0);

  const secondDigit = 11 - (sumArr % 11);

  return secondDigit > 9 ? 0 : secondDigit;
}

function compareArr(arr1, arr2) {
  for (let item in arr1) {
    if (arr1[item] !== arr2[item]) return false;
  }

  return true;
}

const cpf = process.argv.slice(2)[0]; // getting cpf through command line
const CPFArray = computeCPF(cpf)
  .split('')
  .map((el) => Number(el));

const twoValidDigits = [
  generateFirstDigit(CPFArray),
  generateSecondDigit(CPFArray),
];
const twoDigits = CPFArray.slice(-2);

console.log(compareArr(twoDigits, twoValidDigits));
