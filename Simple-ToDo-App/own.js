window.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let taskArray = JSON.parse(localStorage.getItem('tasks')) || [];

  taskArray.forEach(element => {
    renderTask(element)
  });

  addButton.addEventListener("click", function () {
    let taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
    };

    taskArray.push(newTask);
    console.log(taskArray);
    saveLocal();
    todoInput.value = "";
  });

  function renderTask(task) {
    console.log(task);
  }

  function saveLocal() {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }
});
