import PasswordGenerator from './modules/PasswordGenerator';
import './assets/css/style.css';

(function () {
  const div = document.querySelector('.result');
  const button = document.querySelector('.btn');

  button.addEventListener('click', (event) => {
    const generator = new PasswordGenerator();
    div.innerHTML = `${generator.genPassword()}`;
  });
})();
