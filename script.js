let taskId = 0;

function addTask(columnId) {
    const taskText = prompt("Enter task:");
    if (!taskText) return;

    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.id = "task-" + taskId++;
    task.innerText = taskText;

    task.addEventListener("dragstart", drag);

    document.querySelector(`#${columnId} .task-list`).appendChild(task);
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const task = document.getElementById(taskId);

    if (event.target.classList.contains("task-list")) {
        event.target.appendChild(task);
    }
}
