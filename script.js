const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">❌</button>
  `;

  // Toggle completed
  li.addEventListener('click', function (e) {
    if (!e.target.classList.contains('delete-btn')) {
      li.classList.toggle('completed');
    }
  });

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = '';
}

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
