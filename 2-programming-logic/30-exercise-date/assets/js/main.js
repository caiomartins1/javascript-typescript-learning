// function getWeekDay(weekDayNumber) {
//   const days = [
//     'Domingo',
//     'Segunda-Feira',
//     'Terça-Feira',
//     'Quarta-Feira',
//     'Quinta-Feira',
//     'Sexta-Feira',
//     'Sábado',
//   ];

//   return days[weekDayNumber];
// }

// function getMonth(month) {
//   const months = [
//     'Janeiro',
//     'Fevereiro',
//     'Março',
//     'Abril',
//     'Maio',
//     'Junho',
//     'Julho',
//     'Agosto',
//     'Setembro',
//     'Outubro',
//     'Novembro',
//     'Dezembro',
//   ];

//   return months[month];
// }

// function addLeftZero(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function dateFormatter(date) {
//   const weekDay = getWeekDay(date.getDay());
//   const day = addLeftZero(date.getDate());
//   const month = getMonth(date.getMonth());
//   const year = date.getFullYear();
//   const hours = addLeftZero(date.getHours());
//   const minutes = addLeftZero(date.getMinutes());

//   return `${weekDay}, ${day} de ${month} de ${year}, ${hours}:${minutes}`;
// }

// function main() {
//   const date = new Date();
//   const h1 = document.querySelector('#date');
//   h1.innerHTML = '';

//   h1.innerHTML = dateFormatter(date);
// }

// main();

const date = new Date();
const h1 = document.querySelector('#date');
const options = {
  dateStyle: 'full',
  timeStyle: 'short',
};

h1.innerHTML = date.toLocaleDateString('pt', options);
