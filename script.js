    
    
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');

    addTaskBtn.addEventListener('click', addTask);
    
    function addTask() {
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}