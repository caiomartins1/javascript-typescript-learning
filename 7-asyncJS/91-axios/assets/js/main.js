axios('pessoas.json').then((response) => loadPeople(response.data));

function loadPeople(json) {
  const div = document.querySelector('.result');
  const table = document.createElement('table');
  for (let person of json) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerText = person.nome;

    const tdEmail = document.createElement('td');
    tdEmail.innerText = person.email;

    const tdAge = document.createElement('td');
    tdAge.innerText = person.idade;

    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdAge);

    table.appendChild(tr);
  }

  div.appendChild(table);
}
