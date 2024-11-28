window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task_text = input.value 

    if(!task_text){
        alert("Please Enter some task")
        return;
    }

    const task = document.createElement('div')
    task.classList.add('task')

    const task_content_div = document.createElement('div')
    task_content_div.classList.add('content')

    const task_input_el = document.createElement('input')
    task_input_el.value = task_text
    task_input_el.type = 'text'
    task_input_el.classList.add('text')
    task_input_el.setAttribute('readonly', 'readonly')
    task_input_el.style.cursor = 'pointer'

    const task_actions_div = document.createElement('div')
    task_actions_div.classList.add('actions')

    const task_edit_btn = document.createElement('button')
    task_edit_btn.classList.add('edit')
    task_edit_btn.innerHTML = 'Edit'

    const task_delete_btn = document.createElement('button')
    task_delete_btn.classList.add('delete')
    task_delete_btn.innerHTML = 'Delete'

    task_actions_div.appendChild(task_edit_btn)
    task_actions_div.appendChild(task_delete_btn)

    task_content_div.appendChild(task_input_el)
    task.appendChild(task_content_div)
    task.appendChild(task_actions_div)
    taskList.appendChild(task)

    input.value = ''

    task_edit_btn.addEventListener('click', ()=> {
        if(task_edit_btn.innerHTML.toLowerCase() == 'edit'){
            task_input_el.removeAttribute('readonly')
            task_edit_btn.innerText = 'Save'
            task_input_el.focus()
        } else {
            task_input_el.setAttribute('readonly', 'readonly')
            task_edit_btn.innerText = 'Edit'
        }
    })

    task_delete_btn.addEventListener('click', ()=> {
        taskList.removeChild(task)
    })

    task_input_el.addEventListener('click', ()=>{
        task_input_el.classList.toggle('completed')
    })

  });
});
