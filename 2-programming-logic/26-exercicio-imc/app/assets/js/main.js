const weight = Number(document.querySelector('#weight').value);
const height = Number(document.querySelector('#height').value);

function IMC() {
  const button = document.querySelector('button');

  function calcIMC(event) {
    event.preventDefault();

    const weight = Number(document.querySelector('#weight').value);
    const height = Number(document.querySelector('#height').value);

    const messageDiv = document.querySelector('.result');
    const message = document.querySelector('div p');

    if (!weight || !height) {
      message.innerHTML = 'Dados Inválidos';
      messageDiv.classList.add('invalid');
      return;
    }

    const imc = weight / height ** 2;

    messageDiv.classList.remove('invalid');
    messageDiv.classList.add('valid');

    if (imc < 19.5) {
      message.innerHTML = `Seu IMC é ${imc} (Abaixo Normal)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      message.innerHTML = `Seu IMC é ${imc} (Peso Normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
      message.innerHTML = `Seu IMC é ${imc} (Sobre Peso)`;
    } else if (imc >= 30 && imc <= 34.9) {
      message.innerHTML = `Seu IMC é ${imc} (Obesidade Grau 1)`;
    } else if (imc >= 35 && imc <= 39.9) {
      message.innerHTML = `Seu IMC é ${imc} (Obesidade Grau 2)`;
    } else if (imc >= 40) {
      message.innerHTML = `Seu IMC é ${imc} (Obesidade Grau 1)`;
    }
  }

  button.addEventListener('click', calcIMC);
}

IMC();
