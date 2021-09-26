const addTaskBtn = document.querySelector('.addTasks');
const deskTaskInput = document.querySelector('description-task');

let tasks;
!localStorage.tasks ? tasks = [] : task = JSON.parse(localStorage.getItem('tasks'));

let todoItemElem = [];

function Task(description) {
    this.description = description;
    this.completed = this.completed;
}

const createTemplate = (task, index) => {
    return `     <div class="todo-item ${task.completed ? 'checked' : ''}">
                    <div class="description">${task.description}</div>
                    <div class="buttons">
                        <input onclick="completeTasks(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'checked' : ''}>
                        <button class="btn-delete">Delete</button>
                    </div>
                </div>`
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = " ";
    if (tasks.lenght > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElem = document.querySelectorAll('.todo-item');
    }
}
fillHtmlList();

const updateLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const completeTaskk = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
        todoItemElem[index].classList.add('checked');
    }else {
        todoItemElem[index].classList.remove('checked'); 
    }
    updateLocal();
    fillHtmlList();
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    updateLocal();
    fillHtmlList();
    deskTaskInput.value = '';
})