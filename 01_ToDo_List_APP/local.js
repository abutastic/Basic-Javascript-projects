window.addEventListener("load", () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const taskList = document.querySelector("#tasks");
  
    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((taskText) => {
      createTaskElement(taskText);
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const task_text = input.value;
  
      if (!task_text) {
        alert("Please Enter some task");
        return;
      }
  
      createTaskElement(task_text);
  
      // Save task to localStorage
      savedTasks.push(task_text);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
  
      input.value = "";
    });
  
    function createTaskElement(task_text) {
      const task = document.createElement("div");
      task.classList.add("task");
  
      const task_content_div = document.createElement("div");
      task_content_div.classList.add("content");
  
      const task_input_el = document.createElement("input");
      task_input_el.value = task_text;
      task_input_el.type = "text";
      task_input_el.classList.add("text");
      task_input_el.setAttribute("readonly", "readonly");
      task_input_el.style.cursor = "pointer";
  
      const task_actions_div = document.createElement("div");
      task_actions_div.classList.add("actions");
  
      const task_edit_btn = document.createElement("button");
      task_edit_btn.classList.add("edit");
      task_edit_btn.innerHTML = "Edit";
  
      const task_delete_btn = document.createElement("button");
      task_delete_btn.classList.add("delete");
      task_delete_btn.innerHTML = "Delete";
  
      task_actions_div.appendChild(task_edit_btn);
      task_actions_div.appendChild(task_delete_btn);
  
      task_content_div.appendChild(task_input_el);
      task.appendChild(task_content_div);
      task.appendChild(task_actions_div);
      taskList.appendChild(task);
  
      // Edit task
      task_edit_btn.addEventListener("click", () => {
        if (task_edit_btn.innerHTML.toLowerCase() === "edit") {
          task_input_el.removeAttribute("readonly");
          task_edit_btn.innerText = "Save";
          task_input_el.focus();
        } else {
          task_input_el.setAttribute("readonly", "readonly");
          task_edit_btn.innerText = "Edit";
  
          // Update task in localStorage
          const index = savedTasks.indexOf(task_text);
          if (index !== -1) {
            savedTasks[index] = task_input_el.value;
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
          }
        }
      });
  
      // Delete task
      task_delete_btn.addEventListener("click", () => {
        taskList.removeChild(task);
  
        // Remove task from localStorage
        const index = savedTasks.indexOf(task_text);
        if (index !== -1) {
          savedTasks.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
      });
  
      // Mark task as completed (optional visual feature)
      task_input_el.addEventListener("click", () => {
        task_input_el.classList.toggle("completed");
      });
    }
  });
  