const date = new Date();
const weekDay = date.getDay();

switch (weekDay) {
  case 0:
    console.log('Domingo');
    break; // required a break statement in every case
  case 1:
    console.log('Segunda-Feira');
    break;
  case 2:
    console.log('Terça-Feira');
    break;
  case 3:
    console.log('Quarta-Feira');
    break;
  case 4:
    console.log('Quinta-Feira');
    break;
  case 5:
    console.log('Sexta-Feita');
    break;
  case 6:
    console.log('Sabado');
    break;
  default:
    // default dont needs break because is always the last checked
    console.log('Erro');
}

// or inside a function
function getWeekDay(weekDayNumber) {
  switch (weekDayNumber) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-Feira';
    case 2:
      return 'Terça-Feira';
    case 3:
      return 'Quarta-Feira';
    case 4:
      return 'Quinta-Feira';
    case 5:
      return 'Sexta-Feira';
    case 6:
      return 'Sábado';
  }
}

console.log(getWeekDay(weekDay));
