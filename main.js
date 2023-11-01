let input = document.querySelector('.input');
let addBtn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
let LS = window.localStorage;

// load the tasks when the page is load.
if (LS.length !== 0) {
  for (let i = 1; i <= LS.length; i++) {
    let task = document.createElement('div');
    task.className = 'task';
    task.id = `task-${i}`;
    task.innerText = LS.getItem(`task-${i}`);
    tasks.appendChild(task);
    // add remove button to the task on load.
    let removeBtn = document.createElement('i');
    removeBtn.classList.add('removeBtn', 'fa-regular', 'fa-trash-can');
    task.appendChild(removeBtn);
    // add remoe action
    removeBtn.addEventListener('click', function () {
      LS.removeItem(task.id);
      tasks.removeChild(task);
    })
  }
}
// add new task to the local storage
addBtn.onclick = function (e) {
  e.preventDefault();
  if (input.value.trim().length > 3) {
    LS.setItem(`task-${LS.length + 1}`, input.value);
    // load the new tasks
    let task = document.createElement('div');
    task.className = 'task';
    task.id = `task-${LS.length}`;
    task.innerText = LS.getItem(task.id);
    tasks.appendChild(task);
    // add remove button to the task.
    let removeBtn = document.createElement('i');
    removeBtn.classList.add('removeBtn', 'fa-regular', 'fa-trash-can');
    task.appendChild(removeBtn);
    // add remoe action
    removeBtn.addEventListener('click', function () {
      LS.removeItem(task.id);
      tasks.removeChild(task);
    })
    input.value = '';
  } else {
    input.value = '';
  }
}