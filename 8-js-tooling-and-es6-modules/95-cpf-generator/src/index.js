import GenerateCPF from './modules/GenerateCPF';

import './assets/css/style.css';

(function () {
  const div = document.querySelector('.result');
  const generator = new GenerateCPF();
  div.innerHTML = generator.format(generator.genCPF());
})();
