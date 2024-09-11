const taskList = document.getElementById('taskList');
const inputField = document.getElementById("inputTask");

inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        getTask();
    }
});

function getTask() {
    addTask(inputField.value);
    inputField.value = "";
}

function addTask(description) {
    const taskContainer = document.createElement("div");
    const newTask = document.createElement("input");
    const taskLabel = document.createElement("label");
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute("type", "checkbox");
    newTask.setAttribute("name", description);
    newTask.setAttribute("id", description);
    
    taskLabel.setAttribute("for", description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add("task-item");
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}
