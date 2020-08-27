// more on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const date = new Date();
console.log('date =>', date);
console.log('date.toString() =>', date.toString());

// 01/01/1970 -> Timestamp unix
const oneHour = 60 * 60 * 1000; // in ms
const firstDay = new Date(0 - oneHour);
console.log('firstDay =>', firstDay);
console.log('firstDay.toString() =>', firstDay.toString());

// Other ways to create dates
const date1 = new Date(2020, 7, 16, 16, 56, 00); // year, month (starting from 0), day, hour, min, sec
console.log('date1 => ', date1);
console.log('date1.toString() =>', date1.toString());

const date2 = new Date('2020-08-16 17:00:00');
console.log('date2 => ', date2);
console.log('date2.toString() =>', date2.toString());
// more methods
console.log(date2.getDate()); // get day
console.log(date2.getMonth()); // get month
console.log(date2.getFullYear()); // get year
console.log(date2.getHours()); // get hour
console.log(date2.getMinutes()); // get minutes
console.log(date2.getSeconds()); // get seconds
console.log(date2.getMilliseconds()); // get miliseconds
console.log(date2.getDay()); // get week day (0- Sunday, 6- Saturday)

function addLeftZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function dateFormatter(date) {
  const day = addLeftZero(date.getDate());
  const month = addLeftZero(date.getMonth() + 1);
  const year = addLeftZero(date.getFullYear());

  const hour = addLeftZero(date.getHours());
  const minute = addLeftZero(date.getMinutes());
  const second = addLeftZero(date.getSeconds());

  return `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
}

const today = new Date();
console.log(dateFormatter(today));
