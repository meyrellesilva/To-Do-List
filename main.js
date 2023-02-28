// Selecting elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#taskInput');
const dueDate = document.querySelector('#dueDate');
const taskList = document.querySelector('#taskList');
const viewCompletedTasksButton = document.querySelector('#viewCompletedTasks');
const viewTasksButton = document.querySelector('#viewTasks');

// Adding task
form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  const task = document.createElement('span');
  const date = document.createElement('span');
  const checkbox = document.createElement('input');
  const removeButton = document.createElement('button');

  task.textContent = taskInput.value;
  date.textContent = dueDate.value;
  checkbox.type = 'checkbox';
  removeButton.textContent = 'Remove';

  li.appendChild(task);
  li.appendChild(date);
  li.appendChild(checkbox);
  li.appendChild(removeButton);

  taskList.appendChild(li);

  taskInput.value = '';
  dueDate.value = '';
}

// Removing task
taskList.addEventListener('click', removeTask);

function removeTask(e) {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    taskList.removeChild(li);
  }
}

// Marking task as completed
taskList.addEventListener('change', completeTask);

function completeTask(e) {
  const li = e.target.parentElement;
  if (e.target.checked) {
    li.classList.add('completed');
  } else {
    li.classList.remove('completed');
  }
}

// Viewing completed tasks
viewCompletedTasksButton.addEventListener('click', viewCompletedTasks);

function viewCompletedTasks() {
  const completedTasks = taskList.querySelectorAll('li.completed');
  
  if (viewCompletedTasksButton.textContent === 'View completed tasks') {
    completedTasks.forEach(task => task.style.display = 'block');
    viewCompletedTasksButton.textContent = 'Hide completed tasks';
  } else {
    completedTasks.forEach(task => task.style.display = 'none');
    viewCompletedTasksButton.textContent = 'View completed tasks';
  }
}

// Viewing all tasks
viewTasksButton.addEventListener('click', viewTasks);

function viewTasks() {
  const tasks = taskList.querySelectorAll('li');
  
  if (viewTasksButton.textContent === 'View tasks') {
    tasks.forEach(task => task.style.display = 'block');
    viewTasksButton.textContent = 'Hide tasks';
  } else {
    tasks.forEach(task => task.style.display = 'none');
    viewTasksButton.textContent = 'View tasks';
  }
}
