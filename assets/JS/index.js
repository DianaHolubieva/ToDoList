const addTasksBtn = document.querySelector('.addTasksBtn');
const inputTask = document.querySelector('.description-task');
const tasksList = document.querySelector('.tasksList');
let task = document.createElement('li');

function Task(description){
    this.description = description;
};

addTasksBtn.addEventListener = ('click', () => {
    tasksList.appendChild(task);
    task.push(new Task(inputTask.value));
});