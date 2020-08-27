// Variables exercice
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// trivial solution
let aux;
aux = varA;
varA = varB;
varB = varC;
varC = aux;

// modern javascript solution

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
