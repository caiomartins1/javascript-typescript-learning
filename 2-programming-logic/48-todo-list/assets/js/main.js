function scope() {
  const todoInput = document.querySelector('.title');
  const button = document.querySelector('.addButton');
  const list = document.querySelector('.tasks');

  function saveTasks() {
    const tasks = list.querySelectorAll('li');
    const tasksList = [];

    for (let task of tasks) {
      let taskText = task.innerText;
      taskText = taskText.replace('Delete', '').trim();
      tasksList.push(taskText);
    }

    const tasksJSON = JSON.stringify(tasksList);
    localStorage.setItem('tasks', tasksJSON);
  }

  function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksArray = JSON.parse(tasks);
    for (let task of tasksArray) {
      createTask(task);
    }
  }

  function createBtn(li) {
    li.innerHTML += '  ';

    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.setAttribute('class', 'delete');
    li.appendChild(btn);
  }

  function createLi(task) {
    const li = document.createElement('li');
    li.innerHTML = task;

    return li;
  }

  function createTask(description) {
    const li = createLi(description);
    list.appendChild(li);
    createBtn(li);
    clearInput();
    saveTasks();
  }

  function clearInput() {
    todoInput.value = '';
    todoInput.focus();
  }

  addSavedTasks();

  todoInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      if (!todoInput.value) return;
      createTask(todoInput.value);
    }
  });

  button.addEventListener('click', (e) => {
    if (!todoInput.value) return;
    createTask(todoInput.value);
  });

  document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('delete')) {
      el.parentElement.remove();
      saveTasks();
    }
  });
}

scope();
