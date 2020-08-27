/**
 *  buttonClick() {
      // this -> calc
      document.addEventListener(
        'click',
        function (event) {
          // this-> document
          const el = event.target;
          console.log(el);
          if (el.classList.contains('btn-num')) {
            this.updateDisplay(el.innerText);
          }
        }.bind(this)
      );
    }, if we use arrow function instead, the value of this wont be affected 
 */

function createCalc() {
  return {
    display: document.querySelector('.display'),

    init() {
      this.buttonClick();
      this.enterPress();
    },

    buttonClick() {
      document.addEventListener('click', (event) => {
        const el = event.target;

        if (el.classList.contains('btn-num')) {
          this.updateDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clear();
        }
        if (el.classList.contains('btn-del')) {
          this.del();
        }
        if (el.classList.contains('btn-eq')) {
          this.exec();
        }
      });
    },

    enterPress() {
      document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
          this.exec();
        }
      });
    },

    clear() {
      this.display.value = '';
    },

    del() {
      this.display.value = this.display.value.slice(0, -1);
    },

    exec() {
      let res = this.display.value;
      try {
        res = eval(res);

        if (!res) {
          alert('Invalid values');
          return;
        }

        this.display.value = res;
      } catch (e) {
        alert('Invalid values');
        return;
      }
    },

    updateDisplay(value) {
      this.display.value += value;
    },
  };
}

const calc = createCalc();
calc.init();
