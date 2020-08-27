function main() {
  const elements = [
    { tag: 'p', text: 'Line 1' },
    { tag: 'div', text: 'Line 2' },
    { tag: 'footer', text: 'Line 3' },
    { tag: 'section', text: 'Line 4' },
  ];

  function createElement(element, text) {
    const newElement = document.createElement(element);
    newElement.innerText = text;

    return newElement;
  }

  function buildComponents(componentsArray) {
    const container = document.querySelector('.container');

    for (let i = 0; i < componentsArray.length; i++) {
      let { tag, text } = componentsArray[i];
      let element = createElement(tag, text);
      container.appendChild(element);
    }
  }

  buildComponents(elements);
}

main();
