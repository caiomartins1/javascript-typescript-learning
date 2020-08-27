// function Calc() {
//   display = document.querySelector('.display');

//   this.init = () => {
//     buttonClick();
//     enterPress();
//   };

//   const buttonClick = () => {
//     document.addEventListener('click', (event) => {
//       const el = event.target;

//       if (el.classList.contains('btn-num')) {
//         updateDisplay(el.innerText);
//       }
//       if (el.classList.contains('btn-clear')) {
//         clear();
//       }
//       if (el.classList.contains('btn-del')) {
//         del();
//       }
//       if (el.classList.contains('btn-eq')) {
//         exec();
//       }
//     });
//   };

//   const enterPress = () => {
//     document.addEventListener('keypress', (event) => {
//       if (event.keyCode === 13) {
//         exec();
//       }
//     });
//   };

//   const clear = () => {
//     display.value = '';
//   };

//   const del = () => {
//     display.value = display.value.slice(0, -1);
//   };

//   const exec = () => {
//     let res = display.value;
//     try {
//       res = eval(res);

//       if (!res) {
//         alert('Invalid values');
//         return;
//       }

//       display.value = res;
//     } catch (e) {
//       alert('Invalid values');
//       return;
//     }
//   };

//   const updateDisplay = (value) => {
//     display.value += value;
//   };
// }

// const calc = new Calc();
// calc.init();

// Teacher solution
function CalcProf() {
  this.display = document.querySelector('.display');

  this.init = () => {
    this.handleClick();
    this.handleEnterPress();
  };

  this.handleClick = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;

      if (el.classList.contains('btn-num')) this.updateDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.exec();
    });
  };

  this.handleEnterPress = () => {
    this.display.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        this.exec();
      }
    });
  };

  this.updateDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = '');

  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.exec = () => {
    let res = this.display.value;

    try {
      res = eval(res);
      if (!res) {
        alert('Error');
        return;
      }
      this.display.value = res;
    } catch (e) {
      alert('Error');
      return;
    }
  };
}
const calc2 = new CalcProf();
calc2.init();
