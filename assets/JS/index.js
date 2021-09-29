const addTaskBtn = document.querySelector('.add-task-btn');
const deskTaskInput = document.querySelector('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElem = [];

function Task(description) {
    this.description = description;
    this.completed = this.completed;
};

const createTemplate = (task, index) => {
    return  `
            <div class='todo-item ${task.completed ? 'checked' : ''}'>
                <div class='description'>${task.description}</div>
                    <div class='buttons'>
                        <input onclick='completeTasks(${index})' class='btn-complete' type='checkbox' ${task.completed ? 'checked' : ''}>
                        <button onclick='deleteTasks(${index})' class='btn-delete'>Delete</button>
                    </div>
                </div>
            </div>
            `
};


const filterTasks = () => {
    const activeTasks = tasks.lenght && tasks.filter(item => item.completed === false);
    const completedTasks = tasks.lenght && tasks.filter(item => item.completed === true);
    tasks = [...activeTasks, ...completedTasks]
};


const fillHtmlList = () => {
    todosWrapper.innerHTML = ' ';
    if (tasks.lenght > 0) {
        filterTasks();
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElem = document.querySelectorAll('.todo-item');
    }
};
fillHtmlList();

const updateLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const completedTasks = index => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {todoItemElem[index].classList.add('checked');} else {todoItemElem[index].classList.remove('checked');}
    updateLocal();
    fillHtmlList();
};

addTaskBtn.addEventListener = ('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    deskTaskInput.value = ' ';
});

const deleteTask = index => {
    todoItemElem[index].classList.add('delition');
};