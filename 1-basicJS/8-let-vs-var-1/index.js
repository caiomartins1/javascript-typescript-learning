// One of the differences between VAR and LET

var nome = 'Caio';
var nome = 'Martins';

// The code above will not generate any error because we are using var (not a good behavior)

let nome1 = 'Caio';
let nome1 = 'Martins';

// the code above will throw an error

console.log(nome);
console.log(nome1);
