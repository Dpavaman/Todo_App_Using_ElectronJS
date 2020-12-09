document.getElementById('todoForm').addEventListener('submit', addTask);
const clear = document.getElementById('clear');

function addTask(event) {
    event.preventDefault();
    const newTask = document.getElementById('taskInput').value
    const taskList = document.getElementById('taskList');
    const task = document.createElement('li');
    task.innerHTML = newTask;
    taskList.appendChild(task);
    alert(`${newTask} Added`)
    document.getElementById('todoForm').reset()
}

clear.addEventListener('click', removeAllTasks);

function removeAllTasks() {
    while (document.getElementById('taskList').firstChild) {
        document.getElementById('taskList').removeChild(document.getElementById('taskList').firstChild)
    }
}