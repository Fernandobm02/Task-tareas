// Variables to reference DOM elements
const taskForm = document.getElementById('FormTareas');
const newTaskInput = document.getElementById('NuevaTarea');
const pendingTasksList = document.getElementById('TareasPendientes');
const completedTasksList = document.getElementById('TareasCompletadas');

// Function to add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="Completado">Completado</button>
        <button class="Borrar">Borrar</button>
    `;
    pendingTasksList.appendChild(taskItem);

    // Add event listeners for the buttons
    taskItem.querySelector('.Completado').addEventListener('click', () => completeTask(taskItem));
    taskItem.querySelector('.Borrar').addEventListener('click', () => deleteTask(taskItem));
}

// Function to mark a task as completed
function completeTask(taskItem) {
    taskItem.querySelector('.Completado').textContent = 'Hecho';
    taskItem.querySelector('.Completado').classList.replace('Completado', 'Incompleto');
    completedTasksList.appendChild(taskItem);

    taskItem.querySelector('.Incompleto').addEventListener('click', () => uncompleteTask(taskItem));
}

// Function to undo the completion of a task
function uncompleteTask(taskItem) {
    taskItem.querySelector('.Completado').textContent = 'Completado';
    taskItem.querySelector('.Incompleto').classList.replace('Incompleto', 'Completado');
    pendingTasksList.appendChild(taskItem);
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}

// Event listener for the form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        newTaskInput.value = '';
    }
});
