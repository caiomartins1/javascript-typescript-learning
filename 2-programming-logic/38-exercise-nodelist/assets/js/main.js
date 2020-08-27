const container = document.querySelector('.container');
const ps = document.querySelectorAll('p'); // NodeList is not an array but works similar

const bodyStyles = getComputedStyle(document.body);
const bgColor = bodyStyles.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = bgColor;
  p.style.color = '#fff';
}
