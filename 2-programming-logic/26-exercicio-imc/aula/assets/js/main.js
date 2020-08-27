/**
 * TODO:
 *  1- Get form's submit event
 */

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido.', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida.', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivel = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivel})`;
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    'Abaixo Normal',
    'Peso Normal',
    'Sobre Peso',
    'Obesidade Grau 1',
    'Obesidade Grau 2',
    'Obesidade Grau 3',
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  return (peso / altura ** 2).toFixed(2);
}

function createP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = createP();
  p.innerHTML = msg;

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  result.appendChild(p);
}
