const inputTask = document.getElementById('iputTask');
const buttonCreate = document.getElementById('buttonCreate');
const task = document.getElementById('task_result');

// Загружаем задачи при загрузке страницы
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(taskText => addTaskToDOM(taskText));

function getElementTask() {
  if (inputTask.value.trim() === '') return;
  
  // Добавляем в DOM
  addTaskToDOM(inputTask.value);
  
  // Добавляем в массив и сохраняем
  tasks.push(inputTask.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  inputTask.value = '';
}

function addTaskToDOM(taskText) {
  const taskCard = document.createElement('div');
  taskCard.id = 'task_card';
  
  taskCard.innerHTML = `
    <p>${taskText}</p>
    <button class="removeButton">Удалить</button>
  `;

  const removeButton = taskCard.querySelector('.removeButton');
  removeButton.addEventListener('click', function() {
    taskCard.remove();
    // Удаляем из массива и сохраняем
    tasks = tasks.filter(t => t !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  task.appendChild(taskCard);
}

buttonCreate.addEventListener('click', getElementTask);

inputTask.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') getElementTask();
});



