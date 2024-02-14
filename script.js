function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "X";
        deleteButton.onclick = deleteTask;
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
        saveTasks();
    }
}

function saveTasks() {
    var taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

function deleteTask() {
    this.parentNode.remove();
    saveTasks();
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
    localStorage.removeItem("tasks");
});
