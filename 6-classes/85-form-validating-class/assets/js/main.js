class ValidateForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.listenToEvents();
  }

  listenToEvents() {
    this.form.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.isValidInputs();
    const isPasswordValid = this.isPasswordValid();
    console.log(isValid);
    console.log(isPasswordValid);

    if (isValid && isPasswordValid) {
      alert('Success');
      this.form.submit();
    }
  }

  isValidInputs() {
    let isValid = true;

    for (let errorMsg of this.form.querySelectorAll('.error')) {
      errorMsg.remove();
    }

    for (let input of this.form.querySelectorAll('input')) {
      const label = input.previousElementSibling.innerText;
      if (!input.value) {
        this.generateError(input, `${label} cannot be empty!`);
        isValid = false;
      }

      if (input.id === 'cpf') {
        if (!this.validateCPF(input)) isValid = false;
      }

      if (input.id === 'user') {
        if (!this.validateUser(input)) isValid = false;
      }
    }
    return isValid;
  }

  validateCPF(input) {
    const cpf = new ValidateCPF(input.value);
    if (!cpf.validate()) {
      this.generateError(input, 'CPF not valid!');
      return false;
    }

    return true;
  }

  validateUser(input) {
    let isValid = true;
    const user = input.value;
    if (user.length < 3 || user.length > 12) {
      this.generateError(
        input,
        'User must have at least 3 characters and max 12'
      );
      isValid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.generateError(input, 'User can only have letters and numbers');
      isValid = false;
    }

    return isValid;
  }

  isPasswordValid() {
    let isValid = true;
    const password = this.form.querySelector('#password');
    const confirmation = this.form.querySelector('#confirm-password');

    if (password.value !== confirmation.value) {
      this.generateError(password, 'Both password should be the same');
      this.generateError(confirmation, 'Both password should be the same');
      isValid = false;
    }

    if (password.value.length < 6 || password.value.length > 12) {
      this.generateError(
        password,
        'Password should have at least 6 characters and max 12'
      );
      isValid = false;
    }

    return isValid;
  }

  generateError(input, msg) {
    const p = document.createElement('p');
    p.innerText = msg;
    p.classList.add('error');
    input.insertAdjacentElement('afterend', p);
  }
}
// const cpf = new ValidateCPF('705.484.450-52');
const validate = new ValidateForm();
