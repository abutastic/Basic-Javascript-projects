window.addEventListener("DOMContentLoaded", function () {
  // fetch the elements
  const taskInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

  tasksArray.forEach((element) => {
    renderTask(element);
  });

  addButton.addEventListener("click", () => {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskObj = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasksArray.push(taskObj);
    saveToLocal();
    renderTask()
    taskInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
    <span>${task.text} </span> 
    <button> delete </button>`;

    li.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveToLocal();
    });

    li.querySelector('button').addEventListener('click', function(e){
        e.stopPropagation()
        tasksArray = tasksArray.filter(t => t.id !== task.id)
        li.remove()
        saveToLocal()
    })

    todoList.appendChild(li);
  }

  function saveToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }
});
