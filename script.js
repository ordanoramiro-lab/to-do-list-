const addTaskBtn = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasklist');


addTaskBtn.addEventListener('click', addTask)



// addEventListener(EVENTO A ESUCHAR, FUNCION A EJECUTAR CUANDO FINALMENTE LO ESUCHA);

function addTask() {
    const taskText = taskInput.value.trim(); // limpia el input. Si era ' hola ' => 'hola'
    if(taskText === "") { // VALIDACION DEL INPUT => se fija que no este vacio
        alert("Please enter a task.");  // TIRA ALERTA => no se puede hacer un todo vacio
        return;
    }

    // si estamos aca -> entonces taskText != "" (vacio)
    const li = document.createElement("li"); // CREAMOS UN LI 


    const span = document.createElement("span");  // CREAMOS SPAN PARA QUE SEA EL TEXTO DEL LI
    span.textContent = taskText;  // ASIGNAMOS, LO QUE ESCRIBIO EL USER (TASKTEXT) A EL SPAN 


    const deleteBtn = document.createElement("button");  // CREA boton de cruz 
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");  // agrega la clase delete-btn al boton, esa clase esta en el styles.css y lo pone facha
    deleteBtn.addEventListener("click",  () => {
        li.remove(); 
    });

    const tickBtn = document.createElement("button")
    tickBtn.textContent = "✓";
    tickBtn.classList.add("tickBtn");
    tickBtn.addEventListener("click", () => {
        span.classList.add("tachar");
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(tickBtn);
    taskList.appendChild(li);

    taskInput.value = "";

}
