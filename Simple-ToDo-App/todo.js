window.addEventListener("DOMContentLoaded", function () {
  // fetch the elements from the DOM

  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // declare an empty array where all the tasks will be pushed and retrieved from local storage

  let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

  tasksList.forEach((element) => {
    renderTask(element);
  });

  // Click event when tasks will be added to taskList Array

  addButton.addEventListener("click", function () {
    let text = todoInput.value.trim();
    if (text === "") return;

    // push text into an object
    const newTask = {
      id: Date.now(),
      task: text,
      isCompleted: false,
    };

    // push entire newTask object into taskList array

    tasksList.push(newTask);
    renderTask(newTask);
    saveLocal();
    todoInput.value = "";
  });

  // function to rendertask to the dom

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id)
    if(task.isCompleted){
      li.classList.add('completed')
    }
    li.innerHTML = `
  <span>${task.task}</span>
    <button>delete</button>`;

    li.addEventListener("click", function(e){
      if(e.target.tagName === 'BUTTON') return
      task.isCompleted = !task.isCompleted
      li.classList.toggle('completed')
      saveLocal()  
    })

    li.querySelector('button').addEventListener('click', function(e){
      e.stopPropagation();
      tasksList = tasksList.filter((item) => item.id  !== task.id)
      li.remove()
      saveLocal()
    })


    todoList.appendChild(li);
  }

  // function to save things to the localStorage

  function saveLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }
});
