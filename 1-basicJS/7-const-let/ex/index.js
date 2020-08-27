/*
  Caio Martins is 20 years old, he weights 71 KG, he is 1.70m tall and his IMC is 30.2349832
  Caio was born in 1999
*/

const firstName = 'Caio';
const secondName = 'Martins';
const yearsOld = 20;
const weightInKg = 70.5;
const heightInM = 1.73;

let imc;
let bornYear;

imc = weightInKg / (heightInM * heightInM);
bornYear = 2019 - yearsOld;

const firstString = `${firstName} ${secondName} is ${yearsOld} years old, he is ${heightInM}m tall and his IMC is ${imc.toFixed(
  3
)}`;
const secondString = `${firstString} was born in ${bornYear}`;
console.log(firstString);
console.log(secondString);
